'use client'

import { useState } from 'react'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="text-sm text-green-600">Thanks for subscribing!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent w-56"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand-primary text-white rounded-full px-4 py-2 text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        →
      </button>
    </form>
  )
}
