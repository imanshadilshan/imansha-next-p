'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = ['education', 'skills', 'experience', 'research', 'projects', 'writing', 'contact']

export function NavBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">

          <a href="#" className="text-[15px] font-black tracking-tight text-white">ID.</a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono text-[#555] uppercase tracking-widest">
            {NAV_LINKS.map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-white transition-colors">{s}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop resume button */}
            <a
              href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
              download="Imansha_Dilshan_AI_Engineer_CV.pdf"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[10px] font-mono font-bold tracking-wider text-white uppercase rounded-lg transition-all"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px]"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] bg-white origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-white origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-black md:hidden flex flex-col pt-14 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col flex-1 px-6 py-8 overflow-y-auto">
          {NAV_LINKS.map((s, i) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-5 border-b border-[#0e0e0e] text-[22px] font-black uppercase tracking-[0.08em] text-[#444] hover:text-white transition-colors"
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              <span>{s}</span>
              <span className="text-[12px] font-mono text-[#222]">{String(i + 1).padStart(2, '0')}</span>
            </a>
          ))}
          <a
            href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
            download="Imansha_Dilshan_AI_Engineer_CV.pdf"
            onClick={() => setOpen(false)}
            className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-white text-black text-[12px] font-bold uppercase tracking-widest rounded-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </nav>
      </div>
    </>
  )
}
