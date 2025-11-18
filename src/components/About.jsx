import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_0%,rgba(234,179,8,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-yellow-400/20 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          <h2 className="text-2xl md:text-4xl font-bold text-white">About New Media</h2>
          <p className="mt-4 text-zinc-300">We are an independent graphic design studio focused on bold, contemporary brand identities and expressive digital experiences. Our approach blends strategy and aesthetics, delivering work that feels inevitable and unforgettable.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6">
              <p className="text-yellow-300 text-sm uppercase tracking-widest">Approach</p>
              <p className="mt-2 text-zinc-300">Collaborative, iterative, and insight‑driven — we work closely with teams from first sketch to final launch.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6">
              <p className="text-yellow-300 text-sm uppercase tracking-widest">Capabilities</p>
              <p className="mt-2 text-zinc-300">Brand systems, campaigns, motion, web, packaging, illustration, and art direction across media.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
