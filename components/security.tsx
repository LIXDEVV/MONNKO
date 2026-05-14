import React from 'react'

export default function Security() {
  return (
    <section className="py-20 px-8 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Trust & Transparency</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Security First</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="border border-gray-200 p-8">
            <h4 className="text-lg font-bold mb-4">Code Transparency</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>100% open-source code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Available on GitHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Compiler-level validation</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 p-8">
            <h4 className="text-lg font-bold mb-4">Professional Audits</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>OtterSec audit planned</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>CertiK audit planned</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Sec3 (Solana specialists)</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 p-8">
            <h4 className="text-lg font-bold mb-4">Bug Bounty Program</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Active from day 1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Up to $500K rewards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black font-bold">✓</span>
                <span>Community feedback valued</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-8">
          <h4 className="text-lg font-bold mb-4">Technical Safeguards</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold text-sm mb-3 text-gray-700">Anchor Framework Protections</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Accounts validation at compile-time</li>
                <li>• CPI guards against malicious calls</li>
                <li>• Built-in reentrancy protection</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-sm mb-3 text-gray-700">Protocol Design</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Deterministic execution via Solana runtime</li>
                <li>• Zero-rent PDAs eliminate state bloat</li>
                <li>• Atomic flash loan verification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
