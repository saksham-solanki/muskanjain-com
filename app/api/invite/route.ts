/**
 * POST /api/invite
 *
 * Accepts invite and newsletter submissions.
 * v1: validates, rate-limits, logs. No persistence — easy to add later.
 *
 * TODO: swap in real persistence by replacing the console.log block below with:
 *
 *   // ── Resend (transactional email) ──────────────────────────────────
 *   import { Resend } from 'resend'
 *   const resend = new Resend(process.env.RESEND_API_KEY)
 *   await resend.emails.send({
 *     from: 'Muskan <noreply@muskanjain.com>',
 *     to: body.email ?? 'muskan@muskanjain.com',
 *     subject: 'New invite request',
 *     text: JSON.stringify(body),
 *   })
 *
 *   // ── Notion DB write ───────────────────────────────────────────────
 *   await fetch('https://api.notion.com/v1/pages', {
 *     method: 'POST',
 *     headers: {
 *       'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
 *       'Notion-Version': '2022-06-28',
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify({
 *       parent: { database_id: process.env.NOTION_DB_ID },
 *       properties: {
 *         Handle: { title: [{ text: { content: body.handle } }] },
 *         Building: { rich_text: [{ text: { content: body.building ?? '' } }] },
 *         Email: { email: body.email ?? null },
 *         Kind: { select: { name: body.kind ?? 'invite' } },
 *       },
 *     }),
 *   })
 *
 *   // ── Mailchimp list add ────────────────────────────────────────────
 *   await fetch(`https://us1.api.mailchimp.com/3.0/lists/${process.env.MC_LIST_ID}/members`, {
 *     method: 'POST',
 *     headers: {
 *       Authorization: `Basic ${Buffer.from(`anystring:${process.env.MC_API_KEY}`).toString('base64')}`,
 *       'Content-Type': 'application/json',
 *     },
 *     body: JSON.stringify({ email_address: body.email, status: 'subscribed' }),
 *   })
 */

import { NextRequest, NextResponse } from 'next/server'

// ── In-memory rate limiter (resets on cold start — best-effort) ─────────────
const rateMap = new Map<string, { count: number; windowStart: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateMap.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count += 1
  return false
}

// ── Types ────────────────────────────────────────────────────────────────────
interface InviteBody {
  handle: string
  building?: string
  email?: string
  kind?: 'invite' | 'newsletter'
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Derive IP for rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Try again in an hour.' },
      { status: 429 },
    )
  }

  let body: InviteBody
  try {
    body = (await req.json()) as InviteBody
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body.' },
      { status: 400 },
    )
  }

  const { handle, building, email, kind = 'invite' } = body

  // ── Validation ──────────────────────────────────────────────────────────────
  if (!handle || typeof handle !== 'string') {
    return NextResponse.json(
      { ok: false, error: 'handle is required.' },
      { status: 400 },
    )
  }

  const trimmedHandle = handle.trim()

  if (trimmedHandle.length < 2) {
    return NextResponse.json(
      { ok: false, error: 'handle must be at least 2 characters.' },
      { status: 400 },
    )
  }

  if (trimmedHandle.length > 80) {
    return NextResponse.json(
      { ok: false, error: 'handle must be 80 characters or fewer.' },
      { status: 400 },
    )
  }

  if (kind !== 'invite' && kind !== 'newsletter') {
    return NextResponse.json(
      { ok: false, error: 'kind must be "invite" or "newsletter".' },
      { status: 400 },
    )
  }

  if (kind === 'newsletter') {
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { ok: false, error: 'email is required for newsletter subscriptions.' },
        { status: 400 },
      )
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "That doesn't look like a valid email address." },
        { status: 400 },
      )
    }
  }

  // ── Log (grep-able in deployment logs) ────────────────────────────────────
  console.log(
    JSON.stringify({
      ts: Date.now(),
      handle: trimmedHandle,
      building: building?.trim() ?? '',
      email: email?.trim() ?? '',
      kind,
      ip,
    }),
  )

  // ── TODO: add persistence / email sending here (see top-of-file comments) ──

  return NextResponse.json(
    {
      ok: true,
      message: 'Submission received. A member will reach out within 24 hours.',
    },
    { status: 200 },
  )
}
