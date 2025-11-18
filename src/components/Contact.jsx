import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, SlideUp } from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Failed to submit')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(234,179,8,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Let’s work together</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-2 text-zinc-300">Tell us about your project and we’ll get back within 1–2 business days.</p>
          </FadeIn>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6 sm:grid-cols-2">
            <SlideUp>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-zinc-300">Name</label>
                <input name="name" required className="w-full rounded-xl border border-yellow-400/20 bg-black/40 p-3 text-white placeholder-zinc-500 outline-none backdrop-blur-md focus:border-yellow-400/40" placeholder="Your name" />
              </div>
            </SlideUp>
            <SlideUp delay={0.05}>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm text-zinc-300">Email</label>
                <input type="email" name="email" required className="w-full rounded-xl border border-yellow-400/20 bg-black/40 p-3 text-white placeholder-zinc-500 outline-none backdrop-blur-md focus:border-yellow-400/40" placeholder="you@company.com" />
              </div>
            </SlideUp>
            <SlideUp delay={0.1}>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-zinc-300">Subject</label>
                <input name="subject" required className="w-full rounded-xl border border-yellow-400/20 bg-black/40 p-3 text-white placeholder-zinc-500 outline-none backdrop-blur-md focus:border-yellow-400/40" placeholder="Project subject" />
              </div>
            </SlideUp>
            <SlideUp delay={0.15}>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-zinc-300">Message</label>
                <textarea name="message" required rows="5" className="w-full rounded-xl border border-yellow-400/20 bg-black/40 p-3 text-white placeholder-zinc-500 outline-none backdrop-blur-md focus:border-yellow-400/40" placeholder="Share some details…" />
              </div>
            </SlideUp>
            <SlideUp delay={0.2}>
              <div className="sm:col-span-2 flex items-center gap-4">
                <button type="submit" className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-zinc-900 hover:bg-yellow-300 transition-colors disabled:opacity-60" disabled={status==='loading'}>
                  {status==='loading' ? 'Sending…' : 'Send Message'}
                </button>
                {status==='success' && (<p className="text-green-400">Thanks — we’ll be in touch soon.</p>)}
                {status && status!=='success' && status!=='loading' && (<p className="text-red-400">{String(status)}</p>)}
              </div>
            </SlideUp>
          </form>
        </div>
      </div>
    </section>
  )
}
