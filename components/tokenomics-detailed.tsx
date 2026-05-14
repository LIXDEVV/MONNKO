import React from 'react'

export default function TokenomicsDetailed() {
  return (
    <section className="py-20 px-8 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Token Economics</h3>
          <h2 className="text-3xl md:text-4xl font-bold">$MONKO Tokenomics</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Token info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-3">Token Supply</h4>
              <p className="text-gray-600 mb-4">
                Total emission: <span className="font-bold text-black">100 million $MONKO</span> (deflationary by design).
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Initial Supply</span>
                  <span className="font-medium">100,000,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mechanism</span>
                  <span className="font-medium">Buy & Burn + Redistribution</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">Fee Redistribution</h4>
              <p className="text-gray-600 mb-4">
                0.5% of every transaction (swaps, flash loans, yield) is recycled:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">50% → Permanent Buy & Burn</p>
                    <p className="text-xs text-gray-500">Reduces supply and increases value for all holders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">50% → veMONKO Redistribution</p>
                    <p className="text-xs text-gray-500">Direct rewards for governance participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - veTokenomics */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-3">veTokenomics</h4>
              <p className="text-gray-600 mb-4">
                Lock $MONKO for 1-48 months to earn veMONKO voting power.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-black pl-4 py-2">
                  <p className="text-sm font-medium">Longer lock = Higher multiplier</p>
                  <p className="text-xs text-gray-500">48-month lock maximizes veMONKO earned</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">veMONKO Uses</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Governance Voting</p>
                    <p className="text-xs text-gray-500">Shape protocol direction and proposals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Yield Incentives</p>
                    <p className="text-xs text-gray-500">Direct farming rewards to preferred pools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Fee Sharing</p>
                    <p className="text-xs text-gray-500">Earn a portion of all protocol fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deflationary mechanics */}
        <div className="bg-gray-50 border border-gray-200 p-8">
          <h4 className="text-lg font-bold mb-4">Deflationary Mechanics</h4>
          <p className="text-gray-600 leading-relaxed">
            Every transaction that occurs on MONKO Protocol (swap, flash loan, or yield routing) triggers the fee mechanism. With 0.5% of volume dedicated to buy-backs and burns, the tokenomics are designed to create sustained downward pressure on supply while rewarding long-term governance participants through veMONKO redistribution.
          </p>
        </div>
      </div>
    </section>
  )
}
