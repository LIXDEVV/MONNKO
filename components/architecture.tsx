import React from 'react'

const components = [
  {
    name: 'State Compression',
    description: 'Concurrent Merkle Trees reduce position size from ~10KB to 100-300 bytes. Supports 100,000+ LP positions per pool.',
  },
  {
    name: 'Program Derived Addresses',
    description: 'Zero-rent PDAs with unlimited horizontal scaling. Deterministic deployment for all entities.',
  },
  {
    name: 'Versioned Transactions',
    description: 'Lookup Tables (LUTs) enable complex operations with minimal fees: 0.0002-0.001 SOL even for complex swaps.',
  },
  {
    name: 'Cross-Program Invocation',
    description: 'Fully composable with all Solana programs: Jito, Jupiter, Raydium, Drift, Kamino, and more.',
  },
  {
    name: 'Parallel Execution',
    description: 'Sealevel runtime processes thousands of instructions simultaneously in a single slot (~400ms).',
  },
  {
    name: 'Security-First Design',
    description: 'Anchor framework with compiler-level validation, CPI guards, reentrancy protection, and active bug bounties.',
  },
]

export default function Architecture() {
  return (
    <section className="py-20 px-8 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Technical Foundation</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Built on Solana&apos;s Superpowers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {components.map((comp, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-lg font-bold">{comp.name}</h4>
              <p className="text-gray-600 leading-relaxed">{comp.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 border border-gray-200">
          <h4 className="text-lg font-bold mb-4">Technology Stack</h4>
          <p className="text-gray-600 mb-4">
            Built entirely in Rust using Anchor v0.29+ framework. 100% open-source code with planned audits by OtterSec, CertiK, and Sec3. Active bug bounty program up to $500,000.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium">Rust</span>
            <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium">Anchor</span>
            <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium">Solana</span>
            <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium">Sealevel</span>
            <span className="px-3 py-1 bg-white border border-gray-300 text-sm font-medium">Concurrent Merkle Trees</span>
          </div>
        </div>
      </div>
    </section>
  )
}
