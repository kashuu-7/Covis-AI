import React from 'react'
import ContactHero from '../../components/contactpage/ContactHero'
import ContactUs from '../../components/contact/ContactUs'

export default function page() {
  return (
    <div className="dark">
      <main className="min-h-screen bg-white">
        <ContactHero/>
        <ContactUs/>
      </main>
    </div>
  )
}
