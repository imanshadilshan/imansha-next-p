'use client'

import { useState } from 'react'

interface InstitutionLogoProps {
  src: string
  name: string
  isCurrent?: boolean
}

export function InstitutionLogo({ src, name, isCurrent }: InstitutionLogoProps) {
  const [imgError, setImgError] = useState(false)
  const firstLetter = name.charAt(0)

  return (
    <div className={`w-11 h-11 rounded-full border bg-[#0c0c0c] flex items-center justify-center overflow-hidden flex-shrink-0 transition-all duration-300 ${
      isCurrent
        ? 'border-white shadow-[0_0_10px_rgba(255,255,255,0.15)]'
        : 'border-[#1a1a1a] group-hover:border-[#333]'
    }`}>
      {!imgError ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain p-1.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-sm font-black text-[#aaa] uppercase">{firstLetter}</span>
      )}
    </div>
  )
}
