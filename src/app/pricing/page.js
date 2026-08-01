import React from 'react'
import PricingHero from '../../components/pricing/PricingHero'
import PricingCards from '../../components/pricing/PricingCards'

export default function page() {
  return (
    <div className="dark">
      <main className="min-h-screen bg-white"
      style={{
        scrollBehavior: "smooth",
    }}>
        <PricingHero/>
        <PricingCards/>
      </main>
    </div>
  )
}
