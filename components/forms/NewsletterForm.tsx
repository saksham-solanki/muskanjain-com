'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface NewsletterFormProps {
  /** Placeholder handle value sent alongside the email (defaults to 'subscriber'). */
  handleFallback?: string
}

export function NewsletterForm({ handleFallback = 'subscriber' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setErrorMsg('drop your email first.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          handle: handleFallback,
          email: trimmedEmail,
          kind: 'newsletter',
        }),
      })

      const data = (await res.json()) as { ok: boolean; message?: string; error?: string }

      if (data.ok) {
        setStatus('success')
      } else {
        setErrorMsg(data.error ?? 'something went wrong. try again?')
        setStatus('error')
      }
    } catch {
      setErrorMsg('network hiccup — please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-positive">
        <CheckCircle2 size={15} />
        you're subscribed.
      </span>
    )
  }

  const isPending = status === 'loading'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row items-stretch gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          if (status === 'error') setStatus('idle')
        }}
        placeholder="your@email.com"
        disabled={isPending}
        aria-label="Email address"
        className="flex-1 px-4 py-2.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all disabled:opacity-50 min-w-0"
      />
      <button
        type="submit"
        disabled={isPending}
        className="group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-ink rounded-full hover:bg-ink/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isPending ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            subscribing…
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      {status === 'error' && errorMsg && (
        <p className="w-full text-xs text-negative mt-1" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  )
}
