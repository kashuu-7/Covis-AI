import React from 'react'
import RetentionHero from '@/components/retention-data/RetentionHero'
import RetentionMain from '@/components/retention-data/RetentionMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    style={{
        scrollBehavior: "smooth",
    }}>
      <RetentionHero/>
      <RetentionMain/>
    </div>
  )
}
