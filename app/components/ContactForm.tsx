'use client'

import { useState, useEffect } from 'react'

const TOPICS = [
  'Hiring / Recruitment',
  'Project Collaboration',
  'Just saying Hi'
]

const TEMPLATES: Record<string, string> = {
  'Hiring / Recruitment':
    "Hi Imansha, I saw your portfolio and would love to discuss a potential job opportunity or recruitment for the role of [insert role]...",
  'Project Collaboration':
    "Hi Imansha, I have an interesting software project idea and would love to collaborate with you to design and build it...",
  'Just saying Hi':
    "Hi Imansha, I saw your portfolio and wanted to connect. I'm really impressed by the work you've done, especially [specific project or skill]..."
}

interface ContactFormProps {
  email: string
  github: string
  linkedin: string
}

export function ContactForm({ email, github, linkedin }: ContactFormProps) {
  const [topic, setTopic] = useState('Just saying Hi')
  const [name, setName] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [message, setMessage] = useState('')
  const [isMessageEdited, setIsMessageEdited] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Pre-populate message when topic changes, unless user edited it
  useEffect(() => {
    if (!isMessageEdited) {
      setMessage(TEMPLATES[topic])
    }
  }, [topic, isMessageEdited])

  function handleTopicChange(newTopic: string) {
    setTopic(newTopic)
    setIsMessageEdited(false) // Reset edit status to auto-fill template
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !emailInput || !message) return

    setStatus('sending')
    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: emailInput, topic, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmailInput('')
        setIsMessageEdited(false)
        setMessage(TEMPLATES[topic])
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  function getUsername(url: string) {
    if (!url) return ''
    try {
      const parts = url.replace(/\/$/, '').split('/')
      return parts[parts.length - 1]
    } catch {
      return url
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#333] transition-colors font-sans'

  return (
    <div className="grid lg:grid-cols-[1.2fr_1.3fr] gap-8 lg:gap-16 items-start">
      
      {/* Left Column: Topics & Direct Channels */}
      <div className="space-y-8">
        
        {/* Inquiry Topic Selection */}
        <div>
          <h3 className="text-[10px] font-mono text-[#444] uppercase tracking-widest mb-1.5">
            Select Inquiry Topic
          </h3>
          <p className="text-[12.5px] text-[#888] leading-relaxed mb-5">
            Select a category to pre-populate a quick message template in the form, or write your own message from scratch.
          </p>
          
          <div className="space-y-2">
            {TOPICS.map((t) => {
              const isActive = topic === t
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleTopicChange(t)}
                  className={`w-full flex items-center justify-between px-5 py-4 border rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? 'border-white bg-[#080808] text-white shadow-[0_0_12px_rgba(255,255,255,0.05)]'
                      : 'border-[#141414] bg-[#050505]/40 text-[#888] hover:border-[#222] hover:text-[#bbb]'
                  }`}
                >
                  <span className="text-[13px] font-semibold tracking-wide font-sans">{t}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Direct Channels */}
        <div>
          <h3 className="text-[10px] font-mono text-[#444] uppercase tracking-widest mb-4">
            Direct Channels
          </h3>
          <div className="space-y-2.5">
            
            {/* Email Channel */}
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between border border-[#141414] bg-[#050505]/30 hover:border-[#222] hover:bg-[#080808] rounded-xl p-4 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#444] group-hover:text-[#888] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <span className="text-[9.5px] font-mono font-bold text-[#444] group-hover:text-[#666] tracking-widest uppercase">Email</span>
              </div>
              <span className="text-[12px] font-mono text-[#888] group-hover:text-[#ccc] transition-colors truncate max-w-[200px] sm:max-w-none">
                {email}
              </span>
            </a>

            {/* GitHub Channel */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-[#141414] bg-[#050505]/30 hover:border-[#222] hover:bg-[#080808] rounded-xl p-4 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#444] group-hover:text-[#888] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <span className="text-[9.5px] font-mono font-bold text-[#444] group-hover:text-[#666] tracking-widest uppercase">GitHub</span>
              </div>
              <span className="text-[12px] font-mono text-[#888] group-hover:text-[#ccc] transition-colors">
                {getUsername(github)}
              </span>
            </a>

            {/* LinkedIn Channel */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-[#141414] bg-[#050505]/30 hover:border-[#222] hover:bg-[#080808] rounded-xl p-4 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#444] group-hover:text-[#888] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-[9.5px] font-mono font-bold text-[#444] group-hover:text-[#666] tracking-widest uppercase">LinkedIn</span>
              </div>
              <span className="text-[12px] font-mono text-[#888] group-hover:text-[#ccc] transition-colors">
                {getUsername(linkedin)}
              </span>
            </a>

          </div>
        </div>

      </div>

      {/* Right Column: Send a Message Form Card */}
      <form
        onSubmit={handleSubmit}
        className="border border-[#141414] rounded-2xl p-6 sm:p-8 bg-[#050505]/60 backdrop-blur-sm space-y-5 hover:border-[#1e1e1e] transition-colors"
      >
        <h3 className="text-xl font-bold text-white tracking-tight">
          Send a Message
        </h3>
        
        {/* Name input */}
        <div className="space-y-1.5">
          <label className="text-[9.5px] font-mono font-bold text-[#444] uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        {/* Email input */}
        <div className="space-y-1.5">
          <label className="text-[9.5px] font-mono font-bold text-[#444] uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            required
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="your.email@example.com"
            className={inputClass}
          />
        </div>

        {/* Message textarea */}
        <div className="space-y-1.5">
          <label className="text-[9.5px] font-mono font-bold text-[#444] uppercase tracking-wider">
            Message ({topic.toUpperCase()} TEMPLATE)
          </label>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setIsMessageEdited(true)
            }}
            className={`${inputClass} resize-none leading-relaxed`}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-3.5 bg-white text-black text-xs font-bold rounded-xl hover:bg-[#e8e8e8] disabled:opacity-50 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md"
        >
          {status === 'sending' && (
            <span>Sending...</span>
          )}
          {status === 'success' && (
            <span>Message Sent ✓</span>
          )}
          {status === 'error' && (
            <span>Failed to Send</span>
          )}
          {status === 'idle' && (
            <>
              <span>Send Message</span>
              <svg className="w-3.5 h-3.5 transform rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </>
          )}
        </button>

      </form>

    </div>
  )
}
