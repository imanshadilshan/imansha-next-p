'use client'

import { useState } from 'react'

const TOPICS = [
  'Hiring / Recruitment',
  'Project Collaboration',
  'Research Partnership',
  'Just Saying Hi',
]

const PLACEHOLDERS: Record<string, string> = {
  'Hiring / Recruitment':
    "Hi Imansha, I came across your portfolio and I'm interested in discussing a potential opportunity...",
  'Project Collaboration':
    "Hi Imansha, I have a project idea and I'd love to collaborate with you on it...",
  'Research Partnership':
    "Hi Imansha, I saw your IEEE research work and I'm interested in exploring a research collaboration...",
  'Just Saying Hi':
    "Hi Imansha, I came across your portfolio and just wanted to say your work is impressive!",
}

export function ContactForm() {
  const [topic, setTopic] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const base =
    'w-full px-4 py-3 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg text-sm text-[#ddd] placeholder-[#333] focus:outline-none focus:border-[#333] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input type="text" placeholder="Your Name" required className={base} />
        <input type="email" placeholder="Your Email" required className={base} />
      </div>

      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className={`${base} ${topic ? 'text-[#ddd]' : 'text-[#333]'} appearance-none cursor-pointer`}
      >
        <option value="" disabled hidden>Select Inquiry Topic</option>
        {TOPICS.map((t) => (
          <option key={t} value={t} className="bg-[#0a0a0a] text-[#ddd]">{t}</option>
        ))}
      </select>

      <textarea
        placeholder={
          topic
            ? PLACEHOLDERS[topic]
            : "Hi Imansha, I came across your portfolio and..."
        }
        rows={5}
        required
        className={`${base} resize-none`}
      />

      <button
        type="submit"
        className="w-full py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#e5e5e5] transition-colors"
      >
        {submitted ? 'Message Sent ✓' : 'Send Message'}
      </button>
    </form>
  )
}
