import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          <div>
            <h5 className="font-bold mb-4">MONKO PROTOCOL</h5>
            <p className="text-sm text-gray-600">Decentralized protocol for Web3 communities and tribes.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase">Protocol</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Governance</a></li>
              <li><a href="#" className="hover:text-black">Tokenomics</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase">Resources</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Documentation</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-sm uppercase">Legal</h5>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Privacy</a></li>
              <li><a href="#" className="hover:text-black">Terms</a></li>
              <li><a href="#" className="hover:text-black">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 MONKO PROTOCOL. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">Discord</a>
            <a href="https://t.me/monkos_support_bot" className="hover:text-black">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
