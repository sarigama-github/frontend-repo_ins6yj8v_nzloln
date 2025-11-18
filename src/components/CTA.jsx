import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_0%,rgba(234,179,8,0.12),transparent)]" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Have an idea? Let’s build something striking.</h3>
              <p className="mt-2 text-zinc-300">We partner with startups and brands to design iconic identities and immersive visuals.</p>
            </div>
            <a href="mailto:hello@newmedia.studio" className="inline-flex items-center rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-zinc-900 hover:bg-yellow-300 transition-colors">hello@newmedia.studio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
