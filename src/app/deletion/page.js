import React from 'react'
import DeletionHero from '../../components/deletion/DeletionHero'
import DeleteMain from '../../components/deletion/DeleteMain'

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    style={{
        scrollBehavior: "smooth",
    }}>
      <DeletionHero/>
      <DeleteMain/>
    </div>
  )
}
