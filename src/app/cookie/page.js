import React from 'react'
import CookieHero from '../../components/cookie-policy/CookieHero'
import CookieMain from '../../components/cookie-policy/CookieMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    style={{
        scrollBehavior: "smooth",
    }}>
      <CookieHero/>
      <CookieMain/>
    </div>
  )
}
