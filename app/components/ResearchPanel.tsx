'use client'

import { useState } from 'react'

interface Contribution {
  label: string
  subtitle: string
  metric: { value: string; label: string }
  description: string
  focuses: string[]
  tech: string[]
}

interface ResearchPanelProps {
  title: string
  badge: string
  venue: string
  period: string
  contributions: Contribution[]
  defaultOpen?: boolean
  statusLabel?: string
}

export function ResearchPanel({ title, badge, venue, period, contributions, defaultOpen = false, statusLabel = 'Accepted' }: ResearchPanelProps) {
  const [isOpen, setIsOpen]   = useState(defaultOpen)
  const [active, setActive]   = useState(0)
  const c = contributions[active]

  return (
    <div className="border border-[#222] rounded-2xl overflow-hidden mb-3">

      {/* ── Paper card (clickable toggle) ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full px-6 py-5 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors text-left"
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 text-[10px] font-mono text-[#aaa] border border-[#2a2a2a] rounded-lg bg-[#111] tracking-wide">{badge}</span>
          <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono text-[#555] border border-[#1a1a1a] rounded-lg bg-[#080808] tracking-wide">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusLabel === 'Accepted' ? 'bg-emerald-500' : statusLabel === 'Under Revision' ? 'bg-yellow-400' : 'bg-amber-400'}`} />
            {statusLabel} · {venue}
          </span>
          <div className="ml-auto flex items-center gap-3 flex-shrink-0">
            <span className="text-[11px] font-mono text-[#444]">{period}</span>
            <div className={`w-8 h-8 rounded-lg border border-[#2a2a2a] bg-[#111] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[#444] bg-[#1a1a1a]' : ''}`}>
              <svg
                className={`w-5 h-5 text-[#aaa] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="text-[15px] font-semibold text-white leading-snug max-w-3xl">{title}</h3>
      </button>

      {/* ── Expandable detail ── */}
      {isOpen && (
        <div className="border-t border-[#161616] p-4 bg-[#060606]">
          <div className="grid md:grid-cols-[260px_1fr] gap-3">

            {/* Left — contributions list */}
            <div className="border border-[#222] rounded-2xl overflow-hidden">
              {contributions.map((cn, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActive(i) }}
                  className={`w-full text-left flex items-center gap-4 px-5 py-4 border-b border-[#111] last:border-b-0 transition-all ${
                    i === active ? 'bg-[#111]' : 'hover:bg-[#0a0a0a]'
                  }`}
                >
                  <div className="flex-shrink-0 w-5 flex items-center justify-center">
                    {i === active
                      ? <span className="w-2 h-2 rounded-full bg-white" />
                      : <span className="text-[12px] font-mono text-[#444]">{i + 1}</span>
                    }
                  </div>
                  <span className={`text-[13px] font-medium leading-snug transition-colors ${
                    i === active ? 'text-white' : 'text-[#666] hover:text-[#aaa]'
                  }`}>
                    {cn.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — detail */}
            <div className="border border-[#222] rounded-2xl overflow-hidden">
              <div className="px-6 py-5 border-b border-[#161616] bg-[#080808]">
                <p className="text-[10px] font-mono text-[#444] tracking-[0.2em] uppercase mb-3">
                  Contribution {active + 1} of {contributions.length}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white leading-snug">{c.label}</h3>
                    <p className="text-[12px] text-[#555] font-mono mt-1">{c.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0 border border-[#222] rounded-xl px-4 py-3 bg-[#0d0d0d] text-right min-w-[100px]">
                    <p className="text-[20px] font-black text-white leading-none">{c.metric.value}</p>
                    <p className="text-[9px] font-mono text-[#444] uppercase tracking-widest mt-1 leading-snug">{c.metric.label}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 space-y-6 bg-[#050505]">
                <p className="text-[13px] text-[#999] leading-[1.9]">{c.description}</p>
                <div>
                  <p className="text-[9px] font-mono text-[#444] uppercase tracking-[0.2em] mb-3">Key Contributions &amp; Findings</p>
                  <ul className="space-y-2.5">
                    {c.focuses.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#aaa]">
                        <svg className="w-4 h-4 text-[#444] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[9px] font-mono text-[#444] uppercase tracking-[0.2em] mb-3">Technologies &amp; Methods</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-[11px] font-mono text-[#888] border border-[#1e1e1e] rounded-lg bg-[#0a0a0a]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
