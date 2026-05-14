import React from 'react'

export default function CTA() {
  return (
    <section className="py-20 px-8 bg-black text-white border-t border-gray-800">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Future of DeFi?</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          MONKO PROTOCOL combines lightning-fast orderbook execution with automated market making, all powered by Solana&apos;s unmatched speed and efficiency.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-colors">
            Launch App
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-colors">
            Read Documentation
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-800 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-400 text-sm mb-2">Execution Speed</p>
            <p className="text-2xl font-bold">&lt; 400ms</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">Average Fee</p>
            <p className="text-2xl font-bold">$0.0002</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2">LP Positions</p>
            <p className="text-2xl font-bold">100,000+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
