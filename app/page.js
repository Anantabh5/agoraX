import React from 'react'
import Image from 'next/image'
import Landing from '@/components/Landing'
import Neon from '@/components/Neon'
import Nav from '@/components/Nav'
import Features from '@/components/Features'
import Counting from '@/components/Counting'
import Services from '@/components/Services'
import Glow from '@/components/Glow'
const page = () => {
  return (
    <div>
    <Nav/>
    
    <Neon/>
    <Landing />
    <div style={{ position: 'relative' }}>
    <Features/>
    </div>
    <Counting/>
    <Services/>
    
    <Neon/>
    </div>
  )
}

export default page