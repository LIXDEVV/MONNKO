import React from 'react'

const communityData = [
  {
    name: 'Protocol Developers',
    description: 'Build on top of MONKO PROTOCOL',
    members: 1240,
  },
  {
    name: 'Governance',
    description: 'Shape the future of the protocol',
    members: 856,
  },
  {
    name: 'Community Builders',
    description: 'Create tribes and grow communities',
    members: 2103,
  },
  {
    name: 'Research',
    description: 'Deep dive into Web3 and protocols',
    members: 421,
  },
]

export default function Communities() {
  return (
    <section className="border-b border-gray-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">Join Our Network</h3>
        <h2 className="mb-12 text-3xl md:text-4xl font-bold">Active Communities</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {communityData.map((community) => (
            <div
              key={community.name}
              className="border border-gray-200 rounded-lg p-8 hover:border-black transition-colors"
            >
              <h4 className="mb-2 text-lg font-bold">{community.name}</h4>
              <p className="mb-4 text-sm text-gray-600">{community.description}</p>
              <p className="text-xs font-mono text-gray-400">
                {community.members.toLocaleString()} members
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
