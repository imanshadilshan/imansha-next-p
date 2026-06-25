'use client'

import { useState, useEffect } from 'react'

const PASSWORD = 'imansha2026'

interface Content {
  hero: { greeting: string; name: string; title: string; tagline: string; availability: string }
  about: { summary: string; highlights: string[] }
  contact: { email: string; phone: string; linkedin: string; github: string; medium: string; location: string }
}

interface Submission {
  id: number
  name: string
  email: string
  topic: string
  message: string
  created_at: string
}

type Tab = 'hero' | 'about' | 'contact' | 'submissions'

export default function Dashboard() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [content, setContent] = useState<Content | null>(null)
  const [tab, setTab] = useState<Tab>('hero')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loadError, setLoadError] = useState(false)

  // Submissions State
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loadingSubmissions, setLoadingSubmissions] = useState(false)
  const [submissionsError, setSubmissionsError] = useState(false)

  useEffect(() => {
    if (authed) {
      fetch('/api/content')
        .then((r) => r.json())
        .then(setContent)
        .catch(() => setLoadError(true))
    }
  }, [authed])

  useEffect(() => {
    if (authed && tab === 'submissions') {
      fetchSubmissions()
    }
  }, [authed, tab])

  async function fetchSubmissions() {
    setLoadingSubmissions(true)
    setSubmissionsError(false)
    try {
      const res = await fetch('/api/submissions')
      if (res.ok) {
        const data = await res.json()
        setSubmissions(data)
      } else {
        setSubmissionsError(true)
      }
    } catch {
      setSubmissionsError(true)
    } finally {
      setLoadingSubmissions(false)
    }
  }

  async function handleDeleteSubmission(id: number) {
    if (!confirm('Are you sure you want to delete this submission?')) return
    try {
      const res = await fetch(`/api/submissions?id=${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id))
      } else {
        alert('Failed to delete submission.')
      }
    } catch {
      alert('Failed to delete submission.')
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (pw === PASSWORD) {
      setAuthed(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  async function handleSave() {
    if (!content) return
    setSaving(true)
    setSaved(false)
    try {
      await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } finally {
      setSaving(false)
    }
  }

  function updateHero(key: keyof Content['hero'], val: string) {
    setContent((c) => c ? { ...c, hero: { ...c.hero, [key]: val } } : c)
  }

  function updateAbout(key: keyof Omit<Content['about'], 'highlights'>, val: string) {
    setContent((c) => c ? { ...c, about: { ...c.about, [key]: val } } : c)
  }

  function updateHighlight(index: number, val: string) {
    setContent((c) => {
      if (!c) return c
      const highlights = [...c.about.highlights]
      highlights[index] = val
      return { ...c, about: { ...c.about, highlights } }
    })
  }

  function updateContact(key: keyof Content['contact'], val: string) {
    setContent((c) => c ? { ...c, contact: { ...c.contact, [key]: val } } : c)
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <span className="text-2xl font-black text-white">ID.</span>
            <h1 className="text-lg font-bold text-white mt-4">Dashboard</h1>
            <p className="text-[#444] text-sm mt-1 font-mono">Enter password to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={pw}
              onChange={(e) => { setPw(e.target.value); setPwError(false) }}
              placeholder="Password"
              autoFocus
              className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg text-sm text-white placeholder-[#333] focus:outline-none transition-colors ${pwError ? 'border-red-900' : 'border-[#1a1a1a] focus:border-[#2a2a2a]'}`}
            />
            {pwError && <p className="text-red-500 text-xs font-mono">Incorrect password.</p>}
            <button
              type="submit"
              className="w-full py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#e8e8e8] transition-colors"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-red-500 text-sm font-mono">Failed to load content.</p>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-5 h-5 border border-[#222] border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'hero', label: 'Hero' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'submissions', label: 'Submissions' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#111] bg-black/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-base font-black text-white">ID.</a>
            <span className="text-[#222] text-sm font-mono">/ dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-white text-xs font-mono">Saved.</span>
            )}
            <a href="/" className="px-3 py-2 text-xs text-[#444] hover:text-white transition-colors font-mono">
              ← View Site
            </a>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg hover:bg-[#e8e8e8] disabled:opacity-40 transition-colors"
            >
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 relative z-10">

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-[#080808] border border-[#111] rounded-lg mb-8 w-fit">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded-md text-xs font-mono font-medium transition-all ${tab === t.id ? 'bg-[#1a1a1a] text-white' : 'text-[#333] hover:text-[#666]'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Hero Tab ── */}
        {tab === 'hero' && (
          <div className="space-y-5">
            <SectionCard title="Hero Section">
              <FieldGroup label="Greeting">
                <Input value={content.hero.greeting} onChange={(v) => updateHero('greeting', v)} />
              </FieldGroup>
              <FieldGroup label="Name">
                <Input value={content.hero.name} onChange={(v) => updateHero('name', v)} />
              </FieldGroup>
              <FieldGroup label="Title">
                <Input value={content.hero.title} onChange={(v) => updateHero('title', v)} />
              </FieldGroup>
              <FieldGroup label="Tagline">
                <Textarea value={content.hero.tagline} onChange={(v) => updateHero('tagline', v)} rows={3} />
              </FieldGroup>
              <FieldGroup label="Availability Badge">
                <Input value={content.hero.availability} onChange={(v) => updateHero('availability', v)} />
              </FieldGroup>
            </SectionCard>
          </div>
        )}

        {/* ── About Tab ── */}
        {tab === 'about' && (
          <div className="space-y-5">
            <SectionCard title="About Section">
              <FieldGroup label="Professional Summary">
                <Textarea value={content.about.summary} onChange={(v) => updateAbout('summary', v)} rows={6} />
              </FieldGroup>
              <FieldGroup label="Highlights">
                <div className="space-y-2">
                  {content.about.highlights.map((h, i) => (
                    <Input key={i} value={h} onChange={(v) => updateHighlight(i, v)} placeholder={`Highlight ${i + 1}`} />
                  ))}
                </div>
              </FieldGroup>
            </SectionCard>
          </div>
        )}

        {/* ── Contact Tab ── */}
        {tab === 'contact' && (
          <div className="space-y-5">
            <SectionCard title="Contact Details">
              <FieldGroup label="Email">
                <Input value={content.contact.email} onChange={(v) => updateContact('email', v)} type="email" />
              </FieldGroup>
              <FieldGroup label="Phone">
                <Input value={content.contact.phone} onChange={(v) => updateContact('phone', v)} />
              </FieldGroup>
              <FieldGroup label="Location">
                <Input value={content.contact.location} onChange={(v) => updateContact('location', v)} />
              </FieldGroup>
              <FieldGroup label="LinkedIn URL">
                <Input value={content.contact.linkedin} onChange={(v) => updateContact('linkedin', v)} />
              </FieldGroup>
              <FieldGroup label="GitHub URL">
                <Input value={content.contact.github} onChange={(v) => updateContact('github', v)} />
              </FieldGroup>
              <FieldGroup label="Medium URL">
                <Input value={content.contact.medium} onChange={(v) => updateContact('medium', v)} />
              </FieldGroup>
            </SectionCard>
          </div>
        )}

        {/* ── Submissions Tab ── */}
        {tab === 'submissions' && (
          <div className="space-y-4 animate-fade-up">
            <div className="border border-[#111] rounded-xl overflow-hidden bg-[#050505]/40">
              <div className="px-5 py-4 border-b border-[#111] bg-[#050505] flex items-center justify-between">
                <h2 className="text-[10px] text-[#333] font-mono uppercase tracking-widest">Received Messages</h2>
                <button
                  onClick={fetchSubmissions}
                  className="text-[10px] font-mono text-[#555] hover:text-white uppercase tracking-wider transition-colors"
                >
                  Refresh
                </button>
              </div>
              
              {loadingSubmissions ? (
                <div className="p-8 flex items-center justify-center">
                  <div className="w-5 h-5 border border-[#222] border-t-white rounded-full animate-spin" />
                </div>
              ) : submissionsError ? (
                <div className="p-8 text-center text-red-500 text-xs font-mono">
                  Failed to load submissions.
                </div>
              ) : submissions.length === 0 ? (
                <div className="p-8 text-center text-[#333] text-xs font-mono">
                  No submissions found.
                </div>
              ) : (
                <div className="divide-y divide-[#111] bg-[#030303]">
                  {submissions.map((s) => (
                    <div key={s.id} className="p-5 space-y-3 hover:bg-[#050505] transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <span className="text-[13px] font-bold text-white">{s.name}</span>
                          <span className="text-[#333] text-xs font-mono mx-2">|</span>
                          <a href={`mailto:${s.email}`} className="text-xs font-mono text-[#666] hover:text-[#aaa] transition-colors underline">
                            {s.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9.5px] font-mono text-[#555] bg-[#0c0c0c] border border-[#111] px-2 py-0.5 rounded uppercase tracking-wider">
                            {s.topic}
                          </span>
                          <span className="text-[10.5px] font-mono text-[#444]">
                            {new Date(s.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-[13.5px] text-[#aaa] leading-relaxed whitespace-pre-wrap font-sans bg-[#050505]/40 border border-[#111]/40 rounded-xl p-3.5">
                        {s.message}
                      </p>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => handleDeleteSubmission(s.id)}
                          className="px-3 py-1.5 border border-red-950/40 hover:border-red-900 bg-red-950/10 hover:bg-red-950/20 text-red-400 hover:text-red-300 text-[10px] font-mono rounded-lg transition-all uppercase tracking-wider flex items-center gap-1.5"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {tab !== 'submissions' && (
          <div className="flex justify-end mt-8">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#e8e8e8] disabled:opacity-40 transition-colors"
            >
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#111] rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-[#111] bg-[#050505]">
        <h2 className="text-[10px] text-[#333] font-mono uppercase tracking-widest">{title}</h2>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  )
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] text-[#333] font-mono uppercase tracking-wider">{label}</label>
      {children}
    </div>
  )
}

function Input({ value, onChange, placeholder, type = 'text' }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-sm text-[#ccc] placeholder-[#222] focus:outline-none focus:border-[#2a2a2a] transition-colors"
    />
  )
}

function Textarea({ value, onChange, rows = 4, placeholder }: { value: string; onChange: (v: string) => void; rows?: number; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full px-3.5 py-2.5 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-sm text-[#ccc] placeholder-[#222] focus:outline-none focus:border-[#2a2a2a] transition-colors resize-none"
    />
  )
}
