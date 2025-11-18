import React from 'react'
import { Palette, Badge, MonitorSmartphone, Sparkles, PenTool, Layers } from 'lucide-react'
import { Stagger, itemVariant } from './Reveal'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand Identity',
    desc: 'Logos, typography, palette, voice — cohesive systems that scale.',
    icon: <Badge className="h-6 w-6" />,
  },
  {
    title: 'Art Direction',
    desc: 'End‑to‑end creative leadership for campaigns and launches.',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: 'Packaging Design',
    desc: 'Shelf‑ready concepts with tactile detail and visual impact.',
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: 'Digital & Web',
    desc: 'Marketing sites, landing pages, and motion‑ready UI.',
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: 'Illustration',
    desc: 'Editorial, product, and brand illustration in modern styles.',
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    title: 'Color & Visual Systems',
    desc: 'Scalable style guides and component libraries.',
    icon: <Palette className="h-6 w-6" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgba(234,179,8,0.10),transparent),radial-gradient(900px_500px_at_85%_30%,rgba(234,179,8,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Our Services</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Strategy meets craft. We design brands, campaigns, and digital experiences with clarity and character.</p>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={i} variants={itemVariant} className="group rounded-2xl border border-yellow-400/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-yellow-400/10 p-3 text-yellow-300 group-hover:bg-yellow-400/20 transition-colors border border-yellow-400/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
