'use client'

import { useState } from 'react'

interface InstitutionLogoProps {
  src: string
  name: string
}

export function InstitutionLogo({ src, name }: InstitutionLogoProps) {
  const [imgError, setImgError] = useState(false)
  const firstLetter = name.charAt(0)

  return (
    <div className="w-11 h-11 rounded-full border border-[#1a1a1a] bg-[#0c0c0c] flex items-center justify-center overflow-hidden flex-shrink-0">
      {!imgError ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-contain p-1.5"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-sm font-black text-amber-500 uppercase">{firstLetter}</span>
      )}
    </div>
  )
}
