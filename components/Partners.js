'use client'
import React from 'react'
import neon from './neon.module.css';
import Image from 'next/image';
import { RevealWrapper } from 'next-reveal';
import Link from 'next/link';

const Partners = () => {
  return (
    <div  className={`font-extrabold ${neon['Ncont']}`}>
        <div  className={neon.home}>
        <div className={`flex flex-row ${neon['top']}`}>
        
        
        <h1 className="text-5xl text-center text-white py-40"><RevealWrapper  reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}> Building </RevealWrapper><br/> <span className='text-red-400 font-mono px-10 text-5xl py-20'><RevealWrapper reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>trust + transparency + efficiency</RevealWrapper></span><br/> <RevealWrapper reset={true} viewOffset={{top:  45,  right:0,  bottom:  100,  left:5}}>into every link of your supply chain</RevealWrapper></h1>
         <h1 className='text-white text-2xl pb-8 text-center'>click below and get started right away!</h1>
         <div className={neon.light} >         
        <Link href='/services'><h1 className=' text-3xl'>Tranformations with <span><h1 className='font-mono text-5xl md:text-9xl text-violet-400'>agoraX </h1></span></h1></Link>      
         </div>

         
        <div className='flex flex-col lg:flex-row mx-w-full mt-10 '>
         
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image className="transition-transform hover:-translate-x-10 hover:translate-y-10" src="/9.png" width={200} height={200} alt=""></Image></RevealWrapper>
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image className="transition-transform hover:translate-x-10 hover:translate-y-10" src="/8.png" width={200} height={200} alt=""></Image></RevealWrapper>
         
        </div>
        

        </div>

        <div className='text-center text-white text-4xl'>
        

        </div>
    </div>
    
   
    
    </div>
  )
}

export default Partners