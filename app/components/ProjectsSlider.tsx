'use client'

import { useState } from 'react'

interface Project {
  num: string
  title: string
  subtitle: string
  tags: string[]
  description: string
  features?: string[]
  image?: string
  github?: string
  live?: string
  warning?: string
}

interface ProjectsSliderProps {
  projects: Project[]
}

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imgError, setImgError] = useState<Record<number, boolean>>({})

  if (!projects || projects.length === 0) return null

  const currentProject = projects[activeIndex]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleImageError = (index: number) => {
    setImgError((prev) => ({ ...prev, [index]: true }))
  }

  const totalCount = String(projects.length).padStart(2, '0')
  const currentNum = String(activeIndex + 1).padStart(2, '0')

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Mockup Image Frame */}
        <div key={`img-${activeIndex}`} className="relative border border-[#141414] rounded-2xl overflow-hidden bg-[#0c0c0c] aspect-[4/3] flex items-center justify-center animate-fade-in group select-none shadow-xl">
          
          {/* Index Counter Badge */}
          <div className="absolute top-4 left-4 bg-white text-black font-mono text-[10px] px-2.5 py-1 font-bold rounded tracking-wider z-20">
            {currentNum} / {totalCount}
          </div>

          {currentProject.image && !imgError[activeIndex] ? (
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              onError={() => handleImageError(activeIndex)}
            />
          ) : (
            /* Premium Blueprint Grid Fallback */
            <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center p-8 text-center relative">
              <div
                className="absolute inset-0 pointer-events-none select-none opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="w-16 h-16 rounded-2xl bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center mb-4 text-[#444] group-hover:border-[#333] group-hover:text-[#666] transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
                </svg>
              </div>
              <span className="text-[11px] font-mono text-[#555] uppercase tracking-widest leading-normal">
                {currentProject.title}
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Project Details */}
        <div key={`details-${activeIndex}`} className="flex flex-col justify-center animate-fade-up">
          {/* Metadata */}
          <span className="text-[10px] font-mono text-[#888] tracking-widest uppercase">
            {currentProject.subtitle}
          </span>
          
          {/* Title */}
          <h3 className="text-[1.8rem] sm:text-[2.5rem] font-black text-white tracking-tight mt-2 leading-tight">
            {currentProject.title}
          </h3>

          {/* Minimalist Divider */}
          <div className="h-px bg-[#161616] my-4 w-12" />

          {/* Description */}
          <p className="text-[14px] text-[#aaa] leading-relaxed mb-4 font-sans">
            {currentProject.description}
          </p>

          {/* Warning Message */}
          {currentProject.warning && (
            <div className="mb-5 p-3 border border-[#222] bg-[#080808] rounded-xl flex gap-2.5 items-start">
              <svg className="w-4 h-4 text-[#888] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[11px] text-[#888] leading-relaxed font-mono">
                {currentProject.warning}
              </p>
            </div>
          )}

          {/* Features Highlights */}
          {currentProject.features && currentProject.features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {currentProject.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex gap-2.5 text-[12.5px] text-[#aaa] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#555] mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {currentProject.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[9px] font-mono rounded-full border border-[#141414] bg-[#050505] text-[#888] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Row containing Buttons and Slider Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mt-2">
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {currentProject.live && (
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-black hover:bg-[#e8e8e8] text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#1a1a1a] bg-[#080808] hover:border-[#333] hover:bg-[#0c0c0c] text-[#aaa] hover:text-white flex items-center justify-center rounded-lg transition-colors"
                  title="GitHub Repository"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Slider Controls */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-[#1a1a1a] bg-[#080808] hover:border-[#333] hover:bg-[#0c0c0c] text-[#aaa] hover:text-white flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                aria-label="Previous Project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-[#1a1a1a] bg-[#080808] hover:border-[#333] hover:bg-[#0c0c0c] text-[#aaa] hover:text-white flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                aria-label="Next Project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
