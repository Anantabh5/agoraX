import React from 'react'
import Glow from './Glow'
import Base from './Base'
import Image from 'next/image';
const Landing = () => {
  return (
    <Base>
    <div className="pt-20 min-h-screen pr-40 pl-40 pb-40">
      <h1 className=' font-mono text-9xl text-violet-400'>agoraX </h1>
      <br/>
      <h2 className='text-white font-extralight text-5xl text-violet-400'> automate your supply chain</h2>

      <div>
      {/*box*/}
      <div className='flex flex-col'>   
      
      {/*first row*/}
      <div className="flex lg:flex-row mx-w-full sm:flex-col pt-20">

      

<Image
  className='mx-auto max-w-full sm:top-70 md:top-10 xl:top-80 left-0 right-0 -translate-y-10 scroll-smooth animate-scale-105'
  src="/1.png"
  alt="Image description" // Add a descriptive alt text
  layout="responsive" // Specify the layout
  width={400} // Set the desired width
  height={400} // Set the desired height
  objectFit="cover" // Preserve the aspect ratio while covering the container
  quality={80} // Adjust image quality for balance between size and clarity (optional)
  
/>

        
          <h1 className="font-bold text-3xl text-white ">Leading Supply Chain Management Solutions catering to small to big businesses and enterprises
          <br/> <br/>We enable YOU, to seemlessly track the entire life cycle of your products <br/><br/>      
          <h1 className='text-2xl text-black'>Utilizing the power of blockchain technology, we offer security and transparency, ensuring that every step of your supply chain is traceable and accountable.<br/> Rest assured that your valuable assets are protected from fraud, counterfeiting, and unauthorized access, giving you peace of mind and safeguarding your reputation.</h1></h1>
        
        </div>
        {/*second row*/}  
      <div className="flex lg:flex-row-reverse mx-w-full sm:flex-col pt-20">
            
      <Image
  className='mx-auto max-w-full'
  src="/5.png"
  alt="Image description" // Add a descriptive alt text
  layout="responsive" // Specify the layout
  width={40} // Set the desired width
  height={40} // Set the desired height
  objectFit="cover" // Preserve the aspect ratio while covering the container
  quality={80} // Adjust image quality for balance between size and clarity (optional)
/>
          
        <h1 className="font-bold text-3xl text-white ">
          <br/>Discover the next frontier in supply chain management with <span className='font-mono text-6xl text-violet-400'>agoraX</span><br/><br/> Tailored blockchain solutions providing unparalleled transparency, efficiency, and security for businesses of all sizes. <br/><br/>From procurement to delivery, we are committed to empowering organizations to thrive in an ever-evolving marketplace</h1>
              
        </div>
      </div>
      </div>

    </div>
    </Base>
  )
}

export default Landing