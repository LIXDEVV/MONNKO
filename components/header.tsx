import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/monko-logo.png"
              alt="MONKO PROTOCOL"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-lg font-bold tracking-tight">MONKO</h1>
          </div>
          <nav className="hidden gap-8 md:flex">
            <button className="text-sm font-medium hover:opacity-60">Explore</button>
            <button className="text-sm font-medium hover:opacity-60">Community</button>
            <button className="text-sm font-medium hover:opacity-60">Docs</button>
          </nav>
          <button className="rounded-full border border-black px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}
