'use client'

import { useState } from 'react'

interface Milestone {
  label: string
  subtitle: string
  metric: { value: string; label: string }
  description: string
  focuses: string[]
  tech: string[]
}

interface ExperiencePanelProps {
  company: string
  role: string
  team: string
  location: string
  period: string
  milestones: Milestone[]
  defaultOpen?: boolean
  logo?: string
}

export function ExperiencePanel({ company, role, team, location, period, milestones, defaultOpen = false, logo }: ExperiencePanelProps) {
  const [isOpen, setIsOpen]   = useState(defaultOpen)
  const [active, setActive]   = useState(0)
  const m = milestones[active]

  return (
    <div className="border border-[#222] rounded-2xl overflow-hidden mb-3">

      {/* ── Company card (clickable toggle) ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
            {logo ? (
              <img src={logo} alt={company} className="w-full h-full object-contain p-1" />
            ) : (
              <div className="text-[12px] font-bold text-[#888]">{company.slice(0, 2).toUpperCase()}</div>
            )}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-white">{company}</p>
            <p className="text-[12px] text-[#888] font-mono mt-0.5">{role} · {team}</p>
            <p className="text-[11px] text-[#555] font-mono mt-0.5 flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-[#aaa] border border-[#222] rounded-lg bg-[#111]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/><line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/><line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/><line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/></svg>
            {period}
          </span>
          <div className={`w-8 h-8 rounded-lg border border-[#2a2a2a] bg-[#111] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[#444] bg-[#1a1a1a]' : ''}`}>
            <svg
              className={`w-5 h-5 text-[#aaa] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* ── Expandable detail ── */}
      {isOpen && (
        <div className="border-t border-[#161616] p-4 bg-[#060606]">
          <div className="grid md:grid-cols-[260px_1fr] gap-3">

            {/* Left — milestone list */}
            <div className="border border-[#222] rounded-2xl overflow-hidden">
              {milestones.map((ms, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
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
                    {ms.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right — detail */}
            <div className="border border-[#222] rounded-2xl overflow-hidden">
              <div className="px-6 py-5 border-b border-[#161616] bg-[#080808]">
                <p className="text-[10px] font-mono text-[#444] tracking-[0.2em] uppercase mb-3">
                  Milestone {active + 1} of {milestones.length}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[20px] font-bold text-white leading-snug">{m.label}</h3>
                    <p className="text-[12px] text-[#555] font-mono mt-1">{m.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0 border border-[#222] rounded-xl px-4 py-3 bg-[#0d0d0d] text-right min-w-[100px]">
                    <p className="text-[20px] font-black text-white leading-none">{m.metric.value}</p>
                    <p className="text-[9px] font-mono text-[#444] uppercase tracking-widest mt-1 leading-snug">{m.metric.label}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 space-y-6 bg-[#050505]">
                <p className="text-[13px] text-[#999] leading-[1.9]">{m.description}</p>
                <div>
                  <p className="text-[9px] font-mono text-[#444] uppercase tracking-[0.2em] mb-3">Key Focuses &amp; Outputs</p>
                  <ul className="space-y-2.5">
                    {m.focuses.map((f, i) => (
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
                  <p className="text-[9px] font-mono text-[#444] uppercase tracking-[0.2em] mb-3">Technologies &amp; Tools Utilized</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tech.map((t) => (
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
