import fs from 'fs'
import path from 'path'
import type { ReactNode } from 'react'
import { ContactForm } from './components/ContactForm'

export const dynamic = 'force-dynamic'

interface PortfolioContent {
  hero: { greeting: string; name: string; title: string; tagline: string; availability: string }
  about: { summary: string; highlights: string[] }
  contact: { email: string; phone: string; linkedin: string; github: string; medium: string; location: string }
}

function getContent(): PortfolioContent {
  try {
    const file = fs.readFileSync(path.join(process.cwd(), 'data', 'content.json'), 'utf-8')
    return JSON.parse(file)
  } catch {
    return {
      hero: { greeting: "Hello, I'm", name: 'Imansha Dilshan', title: 'AI Engineer | Full-Stack Developer', tagline: 'Building production-grade Generative AI systems, LLM-powered RAG pipelines, and scalable full-stack applications.', availability: 'Available' },
      about: { summary: 'Final-year Software Engineering undergraduate and AI Engineer with hands-on experience building production Generative AI systems.', highlights: ['IEEE Research — IRAI 2026 Melbourne', 'WSO2 Industry Experience', 'CGPA: 3.92 / 4.00'] },
      contact: { email: 'imansha.idr@gmail.com', phone: '+94 76 311 7229', linkedin: 'https://linkedin.com/in/imansha-dilshan', github: 'https://github.com/ima-69', medium: 'https://medium.com/@imansha.idr', location: 'Colombo, Sri Lanka' },
    }
  }
}

/* ─── Static CV data ─── */

const allSkills = [
  { category: 'Gen AI & ML',    items: ['LLMs', 'Prompt Engineering', 'RAG Pipelines', 'Multi-Agent Systems', 'LangGraph', 'Vector Databases', 'pgvector', 'Embedding Pipelines', 'Multimodal AI', 'AI Evaluation', 'Computer Vision', 'YOLOv8', 'TensorFlow', 'Keras', 'Scikit-learn'] },
  { category: 'AI Frameworks',  items: ['LangChain', 'LangGraph', 'FastAPI', 'Streamlit', 'Gemini AI', 'OpenAI API'] },
  { category: 'Backend',        items: ['Python', 'Java', 'Spring Boot', 'Node.js', 'Express.js', 'Ballerina', 'PHP'] },
  { category: 'Frontend',       items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { category: 'Databases',      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'pgvector'] },
  { category: 'Cloud & DevOps', items: ['GCP', 'Azure', 'WSO2 Choreo', 'Docker', 'Asgardeo (IAM)', 'RabbitMQ', 'Git', 'Figma'] },
]

const experience = {
  company: 'WSO2',
  companyInitial: 'W',
  role: 'Intern Software Engineer',
  team: 'Solution Architect Team',
  location: 'Colombo, Sri Lanka (On-site)',
  period: 'Sep 2025 – Feb 2026',
  milestones: [
    { label: 'Geronimo Phase 1', detail: 'Deployed Gemini AI Grounded Search for real-time lead enrichment; built production FastAPI services and deployed to WSO2 Choreo.' },
    { label: 'Geronimo Phase 2', detail: 'Engineered RAG system with document summarization, keyword extraction, vector search using pgvector, and LLM-based response validation.' },
    { label: 'Ballerina Connector', detail: 'Added shared drive support to the open-source Google Drive Connector; released in ballerinax/googleapis.drive 3.4.1.' },
    { label: 'AI Course & Security', detail: 'Co-developed WSO2 AI Course content and led an internal session on securing agentic AI applications using Asgardeo IAM.' },
  ],
}

const research = {
  title: 'Agentic Generative AI Framework for Industrial Predictive Maintenance',
  badge: 'IEEE IES Generative AI Challenge 2026',
  venue: 'IRAI 2026 · Melbourne, Australia',
  period: 'Mar 2026 – Present',
  milestones: [
    { label: 'LangGraph Pipeline', detail: 'Designing a six-node multi-agent pipeline for industrial predictive maintenance reasoning and decision support.' },
    { label: 'Hybrid Confidence Layer', detail: 'Built a Physics-Aware Hybrid Confidence Layer fusing domain knowledge with LLM outputs for safer industrial recommendations.' },
    { label: 'Multimodal RAG Engine', detail: 'Combining image captioning embeddings with text retrieval for institutional intelligence over technical documentation.' },
    { label: 'Continuous Learning Loop', detail: 'Training-free learning via Human-in-the-Loop (HITL) feedback and historical case data integration.' },
  ],
}

const projects = [
  {
    num: '01',
    title: 'AI-Powered Customer Churn Prediction',
    subtitle: 'Deep Learning Application · Dec 2025',
    tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Streamlit'],
    description: 'End-to-end deep learning application using an Artificial Neural Network to predict customer churn in banking. Includes real-time inference interface and live behavioral analysis with Streamlit.',
    github: 'https://github.com/ima-69',
  },
  {
    num: '02',
    title: 'SalonSync — Microservices Booking Platform',
    subtitle: 'Full Stack Platform · Jun 2025 – Present',
    tags: ['Spring Boot', 'React', 'MySQL', 'RabbitMQ', 'Keycloak', 'Stripe', 'Docker'],
    description: 'Enterprise-grade salon booking platform built on microservices architecture. Features Keycloak/JWT auth, Stripe payment processing, and async event-driven communication via RabbitMQ.',
    github: 'https://github.com/ima-69',
  },
  {
    num: '03',
    title: 'Shopping Squad — MERN eCommerce',
    subtitle: 'Full Stack eCommerce · Feb – Jun 2025',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'PayPal', 'Docker'],
    description: 'Full-stack eCommerce platform with product search, order tracking, JWT authentication, admin dashboard, PayPal payment integration, and Cloudinary media management.',
    github: 'https://github.com/ima-69',
  },
]

const education = {
  degree: 'B.Sc. (Hons.) in Software Engineering',
  university: 'University of Kelaniya',
  period: 'Jul 2023 – Present',
  location: 'Kelaniya, Sri Lanka',
  gpa: '3.92 / 4.00',
  highlights: [
    'Specialization: Net-Centric Applications, Data Science & Engineering',
    'Final Year Project: Agentic AI for Industrial Predictive Maintenance',
    'Active in IEEE Student Branch and SESA leadership roles',
  ],
}

const certifications = [
  { name: 'Introduction to Generative AI', issuer: 'Google',      category: 'AI & Data' },
  { name: 'Introduction to Cloud 101',     issuer: 'AWS Educate',  category: 'Cloud' },
  { name: 'React Basics',                  issuer: 'Meta',         category: 'Frontend' },
  { name: 'Programming with JavaScript',   issuer: 'Meta',         category: 'Programming' },
  { name: 'HTML and CSS in Depth',         issuer: 'Meta',         category: 'Frontend' },
  { name: 'Version Control',               issuer: 'Meta',         category: 'DevOps' },
]

const leadership = [
  { role: 'President',        org: "Software Engineering Students' Association", inst: 'University of Kelaniya', period: 'Jun 2025 – Present' },
  { role: 'Head of Design',   org: 'IEEE Student Branch Affinity Group',         inst: 'University of Kelaniya', period: 'Aug 2024 – Present' },
  { role: 'PR Lead, IT Unit', org: 'Leo Club',                                   inst: 'University of Kelaniya', period: 'Aug 2024 – May 2025' },
]

const NAV_LINKS = ['skills', 'experience', 'research', 'projects', 'education', 'contact']

/* ─── Page ─── */

export default function Home() {
  const { hero, about, contact } = getContent()

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">

      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ─── NAV ─── */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="text-[15px] font-black tracking-tight text-white">ID.</a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono text-[#555] uppercase tracking-widest">
            {NAV_LINKS.map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </nav>

          <span className="hidden lg:block text-[11px] font-black tracking-[0.15em] text-[#444] uppercase select-none">
            Imansha Dilshan
          </span>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black"
        style={{ minHeight: '100vh', paddingTop: '3.5rem' }}
      >
        {/* Photo — absolutely positioned right half, no grid line */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 z-0"
          style={{ width: '44%', top: '3.5rem' }}
        >
          {/* Ghost year behind photo */}
          <span
            className="absolute top-8 right-4 font-black text-[#0f0f0f] select-none pointer-events-none leading-none tracking-tighter z-20"
            style={{ fontSize: 'clamp(5rem, 8vw, 8.5rem)' }}
          >
            2026
          </span>
          <img
            src="/hero.jpeg"
            alt="Imansha Dilshan"
            className="absolute inset-0 w-full h-full object-cover object-top z-10"
          />
        </div>

        {/* Left text — full width on mobile, 56% on lg+ */}
        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-3.5rem)] px-6 sm:px-10 lg:px-16 py-10 w-full lg:w-[56%]">
          <div className="w-full animate-fade-up">

            {/* Portfolio label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-white flex-shrink-0" />
              <p className="text-[11px] font-mono text-[#555] tracking-[0.25em] uppercase">Portfolio — 2026</p>
            </div>

            {/* Rule above name */}
            <div className="h-px bg-[#1e1e1e] mb-4" />

            {/* Name */}
            <h1
              className="font-black tracking-[-0.04em] leading-[0.85] uppercase text-white mb-4"
              style={{ fontSize: 'clamp(3.5rem, 7.5vw, 8.5rem)' }}
            >
              {hero.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>

            {/* Rule below name */}
            <div className="h-px bg-[#1e1e1e] mb-5" />

            {/* Subtitle + tagline */}
            <p
              className="font-medium text-[#ccc] mb-2"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}
            >
              {hero.title}
            </p>
            <p className="text-[#555] text-[13px] sm:text-[14px] leading-relaxed mb-1">{hero.tagline}</p>
            <p className="text-[#2a2a2a] text-[12px] font-mono">BSc Software Engineering · University of Kelaniya</p>

            {/* Stats */}
            <div className="flex items-end gap-8 sm:gap-12 mt-6 mb-6">
              <HeroStat value="3.92" label="GPA" />
              <HeroStat value="2×" label="Dean's List" />
              <HeroStat value="5+" label="Projects" />
              <HeroStat value="6 mo" label="WSO2" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="px-6 py-2.5 bg-white text-black text-[13px] font-semibold hover:bg-[#e8e8e8] transition-colors">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-2.5 border border-[#2a2a2a] text-[#bbb] text-[13px] font-semibold hover:border-[#444] hover:text-white transition-all">
                Get In Touch
              </a>
              <a
                href="/Imansha_Dilshan_AI_Engineer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#1a1a1a] text-[#444] text-[13px] font-semibold hover:border-[#333] hover:text-[#888] transition-all"
              >
                <DownloadIcon /> CV
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <SocialLink href={contact.github}             label="GitHub">  <GitHubIcon />  </SocialLink>
              <SocialLink href={contact.linkedin}           label="LinkedIn"><LinkedInIcon /></SocialLink>
              <SocialLink href={contact.medium}             label="Medium">  <MediumIcon />  </SocialLink>
              <SocialLink href={`mailto:${contact.email}`} label="Email">   <MailIcon />    </SocialLink>
              <div className="w-px h-4 bg-[#1a1a1a]" />
              <span className="text-[#2a2a2a] text-[11px] font-mono hidden sm:block">{contact.location}</span>
            </div>

          </div>
        </div>

        {/* Mobile photo (below text on small screens) */}
        <div className="lg:hidden w-full h-64 relative overflow-hidden">
          <img
            src="/hero.jpeg"
            alt="Imansha Dilshan"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Technical Skills" />
          <div className="divide-y divide-[#0e0e0e]">
            {allSkills.map((group) => (
              <div key={group.category} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-5">
                <div className="sm:w-40 flex-shrink-0 pt-1">
                  <p className="text-[10px] font-mono text-[#444] uppercase tracking-widest">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[12px] bg-[#070707] border border-[#161616] rounded-lg text-[#777] hover:text-[#ccc] hover:border-[#2a2a2a] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Experience" />
          <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 border-b border-[#111] bg-[#050505]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0d0d0d] border border-[#1e1e1e] flex items-center justify-center flex-shrink-0">
                  <span className="text-[13px] font-black text-[#777]">{experience.companyInitial}</span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white">{experience.company}</p>
                  <p className="text-[12px] text-[#555] font-mono mt-0.5">{experience.role} · {experience.team}</p>
                  <p className="text-[11px] text-[#333] font-mono mt-0.5">{experience.location}</p>
                </div>
              </div>
              <span className="flex-shrink-0 px-3 py-1.5 text-[11px] font-mono text-[#666] border border-[#1a1a1a] rounded-lg bg-[#080808]">
                {experience.period}
              </span>
            </div>
            <div className="divide-y divide-[#090909] bg-[#030303]">
              {experience.milestones.map((m, i) => (
                <div key={i} className="flex gap-6 px-6 py-5 hover:bg-[#050505] transition-colors">
                  <div className="flex-shrink-0 text-right mt-0.5 w-8">
                    <span className="text-[11px] font-mono text-[#2a2a2a] leading-none block">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] font-mono text-[#1a1a1a] block">/{experience.milestones.length}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#ccc] mb-1.5">{m.label}</p>
                    <p className="text-[13px] text-[#555] leading-[1.75]">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH ─── */}
      <section id="research" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="03" title="Research" />
          <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#111] bg-[#050505] space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[10px] font-mono text-[#aaa] border border-[#2a2a2a] rounded-lg bg-[#0d0d0d] tracking-wide">{research.badge}</span>
                <span className="px-3 py-1 text-[10px] font-mono text-[#555] border border-[#1a1a1a] rounded-lg bg-[#080808] tracking-wide">{research.venue}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <h3 className="text-[15px] font-semibold text-white max-w-2xl leading-snug">{research.title}</h3>
                <span className="text-[11px] font-mono text-[#333] whitespace-nowrap">{research.period}</span>
              </div>
            </div>
            <div className="divide-y divide-[#090909] bg-[#030303]">
              {research.milestones.map((m, i) => (
                <div key={i} className="flex gap-6 px-6 py-5 hover:bg-[#050505] transition-colors">
                  <div className="flex-shrink-0 text-right mt-0.5 w-8">
                    <span className="text-[11px] font-mono text-[#2a2a2a] leading-none block">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] font-mono text-[#1a1a1a] block">/{research.milestones.length}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#ccc] mb-1.5">{m.label}</p>
                    <p className="text-[13px] text-[#555] leading-[1.75]">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="04" title="Projects" />
          <div className="space-y-3">
            {projects.map((p) => (
              <div
                key={p.num}
                className="group border border-[#141414] rounded-2xl overflow-hidden hover:border-[#222] transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Number sidebar */}
                  <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-1 px-5 py-4 md:py-6 md:w-20 border-b md:border-b-0 md:border-r border-[#0e0e0e] bg-[#040404] group-hover:bg-[#060606] transition-colors flex-shrink-0">
                    <span className="text-[2rem] md:text-[2.5rem] font-black text-[#181818] group-hover:text-[#242424] transition-colors leading-none">{p.num}</span>
                    <span className="text-[9px] font-mono text-[#222]">/ {projects.length.toString().padStart(2, '0')}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-6 py-5 bg-[#030303] group-hover:bg-[#050505] transition-colors">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#ddd] group-hover:text-white transition-colors">{p.title}</h3>
                        <p className="text-[11px] font-mono text-[#3a3a3a] mt-0.5">{p.subtitle}</p>
                      </div>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#2a2a2a] hover:text-[#888] transition-colors flex-shrink-0 mt-0.5">
                        <GitHubIcon />
                      </a>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.75] mb-4 max-w-2xl">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-[#080808] border border-[#141414] rounded-lg text-[#444]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="05" title="Education" />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Degree card */}
            <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-4 px-6 py-4 border-b border-[#111] bg-[#050505]">
                <div className="w-10 h-10 rounded-xl bg-[#0d0d0d] border border-[#1e1e1e] flex items-center justify-center flex-shrink-0">
                  <GraduationIcon />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#444]">{education.period}</p>
                  <p className="text-[11px] font-mono text-[#2a2a2a]">{education.location}</p>
                </div>
              </div>
              <div className="px-6 py-5 bg-[#030303] space-y-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{education.degree}</h3>
                  <p className="text-[13px] text-[#555] mt-0.5">{education.university}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono text-[#aaa] border border-[#222] rounded-lg bg-[#0a0a0a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  CGPA: {education.gpa}
                </span>
                <ul className="space-y-2 pt-1">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-[12px] text-[#555] leading-snug">
                      <span className="text-[#2a2a2a] flex-shrink-0 mt-0.5">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Leadership card */}
            <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#111] bg-[#050505]">
                <p className="text-[10px] font-mono text-[#333] uppercase tracking-widest">Leadership & Activities</p>
              </div>
              <div className="divide-y divide-[#080808] bg-[#030303]">
                {leadership.map((l) => (
                  <div key={l.role} className="px-6 py-4 hover:bg-[#050505] transition-colors">
                    <p className="text-[13px] font-semibold text-[#ccc]">{l.role}</p>
                    <p className="text-[12px] text-[#444] mt-0.5">{l.org} — {l.inst}</p>
                    <p className="text-[10px] font-mono text-[#2a2a2a] mt-1">{l.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] font-mono text-[#333] uppercase tracking-widest">Verified Credentials</p>
              <span className="text-[10px] font-mono text-[#222]">— {certifications.length} Certificates</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 px-4 py-3.5 border border-[#111] rounded-xl bg-[#040404] hover:border-[#1a1a1a] hover:bg-[#060606] transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center mt-0.5">
                    <span className="text-[8px] font-black text-[#333]">{cert.category.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] text-[#aaa] font-medium leading-snug truncate">{cert.name}</p>
                    <p className="text-[10px] font-mono text-[#333] mt-0.5">{cert.issuer} · {cert.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-8 relative z-10 border-t border-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="06" title="Contact" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left */}
            <div className="space-y-6">
              <p className="text-[#777] text-[15px] leading-[1.85] max-w-md">
                Open to new opportunities, research collaborations, and interesting conversations about AI and technology. Let&apos;s build something great together.
              </p>
              <div className="space-y-2">
                {[
                  { href: `mailto:${contact.email}`,                    icon: <MailIcon />,    label: contact.email },
                  { href: `tel:${contact.phone.replace(/\s/g, '')}`,    icon: <PhoneIcon />,   label: contact.phone },
                  { href: contact.github,                               icon: <GitHubIcon />,  label: 'github.com/ima-69' },
                  { href: contact.linkedin,                             icon: <LinkedInIcon />,label: 'linkedin.com/in/imansha-dilshan' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-[#111] rounded-xl bg-[#040404] hover:border-[#1e1e1e] hover:bg-[#070707] transition-all group"
                  >
                    <span className="text-[#333] group-hover:text-[#777] transition-colors flex-shrink-0">{item.icon}</span>
                    <span className="text-[#666] text-[12px] font-mono group-hover:text-[#ccc] transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#0e0e0e] py-8 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#222] text-[11px] font-mono">© 2026 Imansha Dilshan — Built with Next.js &amp; Tailwind</p>
          <a href="/dashboard" className="text-[#1a1a1a] hover:text-[#444] text-[11px] font-mono transition-colors">/dashboard</a>
        </div>
      </footer>

    </div>
  )
}

/* ─── Sub-components ─── */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-[10px] font-mono text-[#2a2a2a] mb-3 tracking-widest uppercase">{number} / 06</p>
      <h2 className="text-[2rem] sm:text-[2.8rem] font-black tracking-[-0.02em] text-white">{title}</h2>
    </div>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[2.2rem] sm:text-[2.8rem] font-black text-white leading-none tracking-tight">{value}</span>
      <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest">{label}</span>
    </div>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      title={label}
      className="text-[#333] hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

/* ─── Icons ─── */

function GitHubIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MediumIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg className="w-4 h-4 text-[#444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  )
}
