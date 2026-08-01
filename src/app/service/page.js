import React from 'react'
import ServiceHero from '../../components/service/ServiceHero'
import ServiceMain from '../../components/service/ServiceMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" 
    style={{
        scrollBehavior: "smooth",
    }}>
      <ServiceHero/>
      <ServiceMain/>
    </div>
  )
}
