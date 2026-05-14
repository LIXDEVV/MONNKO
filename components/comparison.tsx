import React from 'react'

export default function Comparison() {
  return (
    <section className="py-20 px-8 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Performance Metrics</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Unmatched on Solana</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-4 px-4 text-left font-bold">Metric</th>
                <th className="py-4 px-4 text-left font-bold">MONKO</th>
                <th className="py-4 px-4 text-left font-bold">Other Solana DEX</th>
                <th className="py-4 px-4 text-left font-bold">Ethereum L2s / Base</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-4 font-medium">Execution Time</td>
                <td className="py-4 px-4 font-bold text-black">&lt; 400ms</td>
                <td className="py-4 px-4 text-gray-600">600-2000ms</td>
                <td className="py-4 px-4 text-gray-600">2-15s</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-4 px-4 font-medium">Avg Fee (Complex Swap)</td>
                <td className="py-4 px-4 font-bold text-black">$0.0002 – $0.001</td>
                <td className="py-4 px-4 text-gray-600">$0.002 – $0.01</td>
                <td className="py-4 px-4 text-gray-600">$0.05 – $0.50</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium">LP Positions per Pool</td>
                <td className="py-4 px-4 font-bold text-black">100,000+</td>
                <td className="py-4 px-4 text-gray-600">&lt; 5,000</td>
                <td className="py-4 px-4 text-gray-600">&lt; 1,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-4 px-4 font-medium">Flash Loan Fee</td>
                <td className="py-4 px-4 font-bold text-black">0.01%</td>
                <td className="py-4 px-4 text-gray-600">0.05-0.1%</td>
                <td className="py-4 px-4 text-gray-600">0.1-0.5%</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium">State Management</td>
                <td className="py-4 px-4 font-bold text-black">Concurrent Merkle Trees</td>
                <td className="py-4 px-4 text-gray-600">Full Accounts</td>
                <td className="py-4 px-4 text-gray-600">Rollups / Shards</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-4 px-4 font-medium">Composability</td>
                <td className="py-4 px-4 font-bold text-black">Unlimited CPI + LUTs</td>
                <td className="py-4 px-4 text-gray-600">Limited</td>
                <td className="py-4 px-4 text-gray-600">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
