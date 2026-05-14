import React from 'react'

export default function Hero() {
  return (
    <section className="border-b border-gray-200 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-2xl px-8 text-center">
        <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Welcome to
          <br />
          <span className="font-bold">MONKO PROTOCOL</span>
        </h2>
        <p className="mb-12 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          A next-generation protocol for decentralized communities. Build stronger networks, share insights, and unlock the future of Web3 together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-80 transition-opacity">
            Join Community
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
