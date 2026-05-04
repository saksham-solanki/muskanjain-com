'use client'

import { useState, useRef } from 'react'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function InviteForm() {
  const [handle, setHandle] = useState('')
  const [building, setBuilding] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const handleRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const trimmedHandle = handle.trim()
    if (!trimmedHandle) {
      setErrorMsg('drop your handle first.')
      setStatus('error')
      handleRef.current?.focus()
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          handle: trimmedHandle,
          building: building.trim() || undefined,
          kind: 'invite',
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
      setErrorMsg('network hiccup, please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-9 flex flex-col items-center gap-3 max-w-md mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-positive/10 ring-1 ring-positive/25 text-positive text-sm font-semibold">
          <CheckCircle2 size={15} />
          you're on the list
        </span>
        <p className="text-sm text-ink-muted">
          check your DMs, a member will reach out within 24 hours.
        </p>
      </div>
    )
  }

  const isPending = status === 'loading'

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-9 max-w-md mx-auto space-y-3">
      {/* Handle field */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3">
        <input
          ref={handleRef}
          type="text"
          value={handle}
          onChange={(e) => {
            setHandle(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          placeholder="@yourhandle"
          maxLength={80}
          disabled={isPending}
          aria-label="Your handle"
          className="flex-1 px-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-ink rounded-full hover:bg-ink/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              sending…
            </>
          ) : (
            <>
              Request Invite
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>

      {/* Optional "what you're building" field */}
      <input
        type="text"
        value={building}
        onChange={(e) => setBuilding(e.target.value)}
        placeholder="what are you building? (optional)"
        maxLength={200}
        disabled={isPending}
        aria-label="What you are building"
        className="w-full px-5 py-3.5 rounded-full bg-white/90 ring-1 ring-rose-mist/60 focus:ring-coral focus:outline-none text-sm text-ink placeholder:text-ink-faint transition-all disabled:opacity-50"
      />

      {/* Error */}
      {status === 'error' && errorMsg && (
        <p className="text-xs text-negative text-center" role="alert">
          {errorMsg}
        </p>
      )}

      {/* Microcopy */}
      <p className="text-xs text-ink-muted text-center tabular">
        no spam · no newsletter · just the invite, or a soft no.
      </p>
    </form>
  )
}
