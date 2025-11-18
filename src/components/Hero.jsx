import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FadeIn } from './Reveal'

export default function Hero() {
  // Mouse reactive glow
  const [bounds, setBounds] = useState({ left: 0, top: 0 })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setBounds({ left: rect.left + window.scrollX, top: rect.top + window.scrollY })
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const glowX = useTransform(sx, (v) => `${v}px`)
  const glowY = useTransform(sy, (v) => `${v}px`)

  return (
    <section onMouseMove={handleMove} className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark noisy gradient overlay (doesn't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(234,179,8,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(234,179,8,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ left: glowX, top: glowY }}
      >
        <div className="h-80 w-80 rounded-full opacity-30"
             style={{
               background: 'radial-gradient(200px 200px at center, rgba(234,179,8,0.22), rgba(234,179,8,0) 70%)'
             }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <FadeIn delay={0.05}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-yellow-300/90 backdrop-blur-md">
            Award-winning Graphic Design Studio
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 className="mx-auto max-w-4xl text-5xl/tight md:text-7xl font-extrabold text-white drop-shadow-[0_10px_50px_rgba(234,179,8,0.2)]">
            New Media
          </h1>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300 md:text-lg">
            We craft bold, modern visuals and brand systems that cut through the noise.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#work" className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(234,179,8,0.4)] hover:bg-yellow-300 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-xl border border-yellow-400/40 bg-white/10 px-5 py-3 font-semibold text-white/90 backdrop-blur-md hover:bg-white/20 transition-colors">Get in Touch</a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
