import React from 'react'

const features = [
  {
    title: 'Hybrid Orderbook',
    subtitle: 'CLOB + AMM',
    description: 'High-speed Central Limit Order Book combined with liquidity-concentrated AMM. Execution time < 400ms with automatic routing.',
  },
  {
    title: 'Dynamic Liquidity',
    subtitle: 'Auto-Rebalancing',
    description: 'Concentrated liquidty positions with real-time auto-rebalancing powered by Pyth & Switchboard oracles.',
  },
  {
    title: 'Flash Loans',
    subtitle: '0.01% Fee',
    description: 'Collateral-free flash loans with minimal fees. Enable complex strategies: arbitrage, liquidations, leverage farming.',
  },
  {
    title: 'Yield Optimizer',
    subtitle: 'Multi-Strategy',
    description: 'Automatically rotates capital between lending, staking, perpetuals, and restaking opportunities.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Core Features</h3>
          <h2 className="text-3xl md:text-4xl font-bold">The Complete DeFi Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="border border-gray-200 p-8 hover:border-black transition-colors">
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">{feature.subtitle}</h4>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
