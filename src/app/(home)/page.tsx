import ExploreCta from '@/components/home/explore-cta'
import Hero from '@/components/home/hero'
import OurFeatures from '@/components/home/our-features'
import OurPartners from '@/components/home/our-partners'
import React from 'react'

const page = () => {
  return (
   <main>
      <Hero />
      <OurFeatures />
      <OurPartners />
      <ExploreCta />
    </main>
  )
}

export default page