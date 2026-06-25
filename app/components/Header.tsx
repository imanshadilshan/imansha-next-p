'use client'

import { useState } from 'react'

const NAV_LINKS = ['education', 'skills', 'experience', 'research', 'projects', 'writing', 'contact']

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ─── NAV BAR ─── */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="text-[15px] font-black tracking-tight text-white select-none">
            ID.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono text-[#555] uppercase tracking-widest">
            {NAV_LINKS.map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <a
            href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
            download="Imansha_Dilshan_AI_Engineer_CV.pdf"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 border border-[#222] bg-[#0c0c0c] hover:bg-white hover:text-black hover:border-white text-[10px] font-mono font-bold tracking-wider text-white uppercase rounded-lg transition-all cursor-pointer shadow-md"
          >
            <DownloadIcon /> Download Resume
          </a>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-lg border border-[#1c1c1c] bg-[#080808] hover:border-[#333] transition-colors relative z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="w-4 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-4 h-[1.5px] bg-[#aaa] transition-all duration-300 transform origin-center ${
                  isOpen ? 'rotate-45 absolute top-[7px]' : ''
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[#aaa] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[#aaa] transition-all duration-300 transform origin-center ${
                  isOpen ? '-rotate-45 absolute top-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ─── MOBILE NAVIGATION OVERLAY ─── */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center px-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center gap-6 text-center">
          {NAV_LINKS.map((s, idx) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-[#888] hover:text-white uppercase tracking-widest transition-colors font-mono"
              style={{
                animation: isOpen ? `fade-in 0.4s ease both ${idx * 0.05 + 0.1}s` : 'none'
              }}
            >
              <span className="text-[11px] text-[#333] mr-2.5 font-mono">0{idx + 1}.</span>
              {s}
            </a>
          ))}
          
          {/* Mobile Resume Link */}
          <div
            className="mt-8"
            style={{
              animation: isOpen ? `fade-in 0.4s ease both ${NAV_LINKS.length * 0.05 + 0.15}s` : 'none'
            }}
          >
            <a
              href="/CV/Imansha_Dilshan_AI_Engineer_CV.pdf"
              download="Imansha_Dilshan_AI_Engineer_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-6 py-3 border border-[#222] bg-[#0c0c0c] text-[12px] font-bold text-white hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-wider rounded-xl cursor-pointer shadow-md"
            >
              <DownloadIcon /> Download Resume
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
