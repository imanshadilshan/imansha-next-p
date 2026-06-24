'use client'

import { useState } from 'react'

export function PhotoFrame() {
  const [error, setError] = useState(false)

  return (
    <div className="w-full h-full">
      {!error ? (
        <img
          src="/photo.jpg"
          alt="Imansha Dilshan"
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#0d0d0d]">
          <span className="text-6xl font-black text-[#2a2a2a] select-none tracking-tighter">ID</span>
        </div>
      )}
    </div>
  )
}
