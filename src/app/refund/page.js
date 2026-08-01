import React from 'react'
import RefundHero from '../../components/refund/RefundHero'
import RefundMain from '../../components/refund/RefundMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    style={{
        scrollBehavior: "smooth",
    }}>
      <RefundHero />
      <RefundMain/>
    </div>
  )
}
