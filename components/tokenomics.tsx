import React from 'react'

export default function Tokenomics() {
  return (
    <section className="border-b border-gray-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Token Distribution
        </h3>
        <h2 className="mb-12 text-3xl md:text-4xl font-bold">$GARAY Tokenomics</h2>

        <div className="rounded-lg border border-gray-200 p-8 md:p-12">
          <h4 className="mb-4 font-bold text-lg">Fair Launch on Pump.fun</h4>
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <p className="text-sm text-gray-600 mb-2">Distribution</p>
              <p className="text-2xl font-bold">98% Fair Launch</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Dev Allocation</p>
              <p className="text-2xl font-bold">2% Buy & Lock</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Contract Address</p>
              <p className="text-xs font-mono break-all">526VsZGqtoS7du6Qo4pHq25MFSRbGDX3cPVFPEfVpump</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
