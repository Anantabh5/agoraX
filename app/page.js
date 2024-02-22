import React from 'react'
import Image from 'next/image'
import Landing from '@/components/Landing'
import Neon from '@/components/Neon'
import Nav from '@/components/Nav'
import Features from '@/components/Features'
import Counting from '@/components/Counting'
import Services from '@/components/Services'
import Glow from '@/components/Glow'
import Gap from '@/components/Gap'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
import Spacing from '@/components/Spacing'
const page = () => {
  return (
    <div>
    <Nav/>
    
    <Neon/>
    <Landing />
    <Gap />
    <Features/>
    
    
    <Counting/>
    <Services/>
    <Spacing/>
    <Gap text="sup nigga" imageSrc="/public/8.png" isLeftSlide={false}/>
    <Partners/>
    <Footer/>
    </div>
  )
}

export default page