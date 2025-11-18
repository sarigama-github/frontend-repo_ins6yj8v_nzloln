import React from 'react'

const reviews = [
  {
    quote: 'They transformed our brand into a living system. Every touchpoint now sings in harmony.',
    name: 'Lena M.',
    role: 'VP Marketing, Volt',
  },
  {
    quote: 'A rare combination of strategic clarity and visual bravado. Our launch was a hit.',
    name: 'Arjun P.',
    role: 'Founder, Apex Athletics',
  },
  {
    quote: 'Fast, thoughtful, and fearless. The new identity unlocked our next stage of growth.',
    name: 'Diana C.',
    role: 'CEO, Mono Studio',
  },
]

export default function Reviews() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(234,179,8,0.10),transparent),radial-gradient(900px_500px_at_80%_30%,rgba(234,179,8,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">What Clients Say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="rounded-2xl border border-yellow-400/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <blockquote className="text-zinc-200">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-400">{r.name} — {r.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
