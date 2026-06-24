'use client'

import { useState, useEffect } from 'react'

const PASSWORD = 'imansha2026'

interface Content {
  hero: { greeting: string; name: string; title: string; tagline: string; availability: string }
  about: { summary: string; highlights: string[] }
  contact: { email: string; phone: string; linkedin: string; github: string; medium: string; location: string }
}

type Tab = 'hero' | 'about' | 'contact'

export default function Dashboard() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [content, setContent] = useState<Content | null>(null)
  const [tab, setTab] = useState<Tab>('hero')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    if (authed) {
      fetch('/api/content')
        .then((r) => r.json())
        .then(setContent)
        .catch(() => setLoadError(true))
    }
  }, [authed])

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

        <div className="flex justify-end mt-8">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#e8e8e8] disabled:opacity-40 transition-colors"
          >
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
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
