import React from 'react'
import PrivacyHero from '../../components/privacy/PrivacyHero'
import PrivacyMain from '../../components/privacy/PrivacyMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    style={{
        scrollBehavior: "smooth",
    }}>
      <PrivacyHero/>
      <PrivacyMain/>
    </div>
  )
}
