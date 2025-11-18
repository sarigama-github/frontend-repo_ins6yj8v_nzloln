import React from 'react'

const projects = [
  {
    title: 'Apex Athletics — Identity System',
    tags: ['Branding', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1540760779711-c8d38ed2ee28?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGV4JTIwQXRobGV0aWNzJTIwJUUyJTgwJTk0JTIwSWRlbnRpdHl8ZW58MHwwfHx8MTc2MzQ0NjUyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Volt — E‑commerce Creative',
    tags: ['Campaign', 'Design'],
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mono Studio — Portfolio Web',
    tags: ['Web', 'Motion'],
    image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Citrus — Packaging Exploration',
    tags: ['Packaging', 'Illustration'],
    image: 'https://images.unsplash.com/photo-1594304466740-01a51b280fd3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXRydXMlMjAlRTIlODAlOTQlMjBQYWNrYWdpbmclMjBFeHBsb3JhdGlvbnxlbnwwfDB8fHwxNzYzNDQ2NTI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      {/* noisy dark gradient bg */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(234,179,8,0.08),transparent),radial-gradient(800px_400px_at_80%_40%,rgba(234,179,8,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Selected Projects</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">A snapshot of recent brand, digital, and campaign work for clients across tech, lifestyle, and culture.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-yellow-400/30 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md hover:bg-white/20 transition-colors">Start a Project</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article key={idx} className="group relative overflow-hidden rounded-2xl border border-yellow-400/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <div className="relative h-56">
                <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-yellow-300/80">{p.tags.join(' • ')}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
