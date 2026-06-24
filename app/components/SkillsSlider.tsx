'use client'

import { useState, useEffect } from 'react'

const I = '/icons'

// darken: true → filter:brightness(0) forces a colored SVG/PNG to solid black on the white card
const ICONS: Record<string, { url: string; darken?: boolean }> = {
  'TensorFlow':          { url: `${I}/tensorflow.svg` },
  'Keras':               { url: `${I}/keras.svg` },
  'Scikit-learn':        { url: `${I}/scikitlearn.svg` },
  'YOLOv8':              { url: `${I}/yolo.svg` },
  'Computer Vision':     { url: `${I}/opencv.svg` },
  'LLMs':                { url: `${I}/openai.svg` },
  'RAG Pipelines':       { url: `${I}/langchain.svg` },
  'LangGraph':           { url: `${I}/langchain.svg` },
  'Multi-Agent':         { url: `${I}/langchain.svg` },
  'Multimodal AI':       { url: `${I}/googlegemini.svg` },
  'Prompt Eng.':         { url: `${I}/openai.svg` },
  'AI Evaluation':       { url: `${I}/huggingface.svg` },
  'pgvector':            { url: `${I}/postgresql.svg` },
  'Embedding Pipelines': { url: `${I}/langchain.svg` },
  'Vector Databases':    { url: `${I}/pinecone.png`, darken: true },
  'FastAPI':             { url: `${I}/fastapi.svg` },
  'Streamlit':           { url: `${I}/streamlit.svg` },
  'LangChain':           { url: `${I}/langchain.svg` },
  'Gemini AI':           { url: `${I}/googlegemini.svg` },
  'OpenAI API':          { url: `${I}/openai.svg` },
  'Python':              { url: `${I}/python.svg` },
  'Java':                { url: `${I}/java.svg` },
  'Spring Boot':         { url: `${I}/spring.svg` },
  'Node.js':             { url: `${I}/nodejs.svg` },
  'Express.js':          { url: `${I}/express.svg` },
  'PHP':                 { url: `${I}/php.svg` },
  'Ballerina':           { url: `${I}/ballerina.svg`, darken: true },
  'Next.js':             { url: `${I}/nextjs.svg` },
  'React':               { url: `${I}/react.svg` },
  'TypeScript':          { url: `${I}/typescript.svg` },
  'JavaScript':          { url: `${I}/javascript.svg` },
  'Redux':               { url: `${I}/redux.svg` },
  'Tailwind CSS':        { url: `${I}/tailwindcss.svg` },
  'HTML5':               { url: `${I}/html5.svg` },
  'CSS3':                { url: `${I}/css3.svg` },
  'PostgreSQL':          { url: `${I}/postgresql.svg` },
  'MySQL':               { url: `${I}/mysql.svg` },
  'MongoDB':             { url: `${I}/mongodb.svg` },
  'GCP':                 { url: `${I}/googlecloud.svg` },
  'Azure':               { url: `${I}/azure.svg`, darken: true },
  'Docker':              { url: `${I}/docker.svg` },
  'Git':                 { url: `${I}/git.svg` },
  'RabbitMQ':            { url: `${I}/rabbitmq.svg` },
  'Figma':               { url: `${I}/figma.svg` },
  'WSO2 Choreo':         { url: `${I}/wso2.png`, darken: true },
  'Asgardeo (IAM)':      { url: `${I}/wso2.png`, darken: true },
}

const CATEGORIES = [
  {
    label: 'Gen AI & ML',
    skills: [
      'TensorFlow', 'Keras', 'Scikit-learn', 'YOLOv8',
      'Computer Vision', 'LLMs', 'RAG Pipelines', 'LangGraph',
      'Multi-Agent', 'Multimodal AI', 'Prompt Eng.', 'AI Evaluation', 'pgvector',
    ],
  },
  {
    label: 'AI Frameworks',
    skills: ['FastAPI', 'Streamlit', 'LangChain', 'LangGraph', 'Gemini AI', 'OpenAI API'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'Java', 'Spring Boot', 'Node.js', 'Express.js', 'PHP', 'Ballerina'],
  },
  {
    label: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'pgvector'],
  },
  {
    label: 'Cloud & DevOps',
    skills: ['GCP', 'Azure', 'Docker', 'Git', 'RabbitMQ', 'Figma', 'WSO2 Choreo', 'Asgardeo (IAM)'],
  },
]

function SkillCard({ name }: { name: string }) {
  const icon = ICONS[name]
  const [imgError, setImgError] = useState(false)

  const abbr = name
    .replace(/[()]/g, '')
    .split(/[\s\-\/]+/)
    .map((w: string) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-3 w-[110px] flex-shrink-0 group cursor-default">
      <div className="w-[76px] h-[76px] flex items-center justify-center rounded-2xl border border-[#e0e0e0] bg-white p-3 group-hover:border-[#bbb] group-hover:shadow-sm transition-all">
        {icon && !imgError ? (
          <img
            src={icon.url}
            alt={name}
            className="w-full h-full object-contain"
            style={icon.darken ? { filter: 'brightness(0) saturate(0)' } : undefined}
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-[11px] font-black text-[#aaa] tracking-tight">{abbr}</span>
        )}
      </div>
      <span className="text-[10px] text-[#444] font-mono text-center leading-snug group-hover:text-[#888] transition-colors px-1">
        {name}
      </span>
    </div>
  )
}

export function SkillsSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % CATEGORIES.length), 5000)
    return () => clearInterval(id)
  }, [])

  const cat   = CATEGORIES[active]
  const items = [...cat.skills, ...cat.skills, ...cat.skills, ...cat.skills]
  const speed = cat.skills.length <= 5 ? 'animate-marquee-fast' : 'animate-marquee'

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-7 h-[2px] bg-white flex-shrink-0" />
        <p className="text-[11px] font-mono text-[#444] tracking-[0.25em] uppercase">Technologies I Work With</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.label}
            onClick={() => setActive(i)}
            className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${
              i === active
                ? 'bg-white text-black'
                : 'text-[#444] border border-[#161616] hover:border-[#2a2a2a] hover:text-[#888]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden">
        <div key={active} className={`flex gap-8 ${speed}`} style={{ width: 'max-content' }}>
          {items.map((name, i) => (
            <SkillCard key={`${active}-${i}`} name={name} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-8">
        {CATEGORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`transition-all rounded-full ${
              i === active ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-[#222] hover:bg-[#444]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
