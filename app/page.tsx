'use client'

import React from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Architecture from '@/components/architecture'
import Comparison from '@/components/comparison'
import TokenomicsDetailed from '@/components/tokenomics-detailed'
import Security from '@/components/security'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Features />
      <Architecture />
      <Comparison />
      <TokenomicsDetailed />
      <Security />
      <CTA />
      <Footer />
    </div>
  )
}
