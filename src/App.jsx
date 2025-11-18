import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background base with subtle noise and vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(234,179,8,0.08),transparent),radial-gradient(1000px_600px_at_90%_20%,rgba(234,179,8,0.06),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.6),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Reviews />
        <Contact />
        <CTA />
        <footer className="border-t border-yellow-400/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-zinc-400">
            <span>© {new Date().getFullYear()} New Media Studio</span>
            <span>Crafted with passion — Black & Yellow</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
