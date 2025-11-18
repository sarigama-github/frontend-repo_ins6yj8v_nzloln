import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-yellow-400/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3 px-5 py-3">
            <div className="h-8 w-8 rounded-lg bg-yellow-400/90 shadow-[0_0_30px_rgba(250,204,21,0.4)]" />
            <span className="text-lg font-semibold tracking-tight text-white">
              New <span className="text-yellow-400">Media</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm px-5">
            <a href="#work" className="text-zinc-300 hover:text-yellow-300 transition-colors">Work</a>
            <a href="#services" className="text-zinc-300 hover:text-yellow-300 transition-colors">Services</a>
            <a href="#about" className="text-zinc-300 hover:text-yellow-300 transition-colors">About</a>
            <a href="#contact" className="text-zinc-900 bg-yellow-400 hover:bg-yellow-300 transition-colors rounded-xl px-4 py-2 font-medium">Start a Project</a>
          </nav>
          <button className="md:hidden p-4 text-zinc-200" aria-label="Open Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
