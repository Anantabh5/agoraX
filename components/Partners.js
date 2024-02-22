
import React from 'react'
import neon from './neon.module.css';

const Partners = () => {
  return (
    <div  className={`font-extrabold ${neon['Ncont']}`}>
        <div  className={neon.home}>
        <div className={`flex flex-row ${neon['top']}`}>
        
        
        <h1 className="text-5xl text-center text-white p-40">Building <br/> <span className='text-red-400 font-mono text-5xl py-20'>trust + transparency + efficiency</span><br/> into every link of your supply chain</h1>
         <div className={neon.light} >         
        <a href = "#"><h1 className=' '>Tranformations with <span><h1 className='font-mono text-9xl text-violet-400'>agoraX </h1></span></h1></a>       
         </div>

         
        <div className='flex lg:flex-row mx-w-full sm:flex-col xs:flex-col'>
         <img className='mx-auto max-w-full ' src="/9.png" style={{ height: '400px', objectFit: 'cover' }}/>
         <img className='mx-auto max-w-full ' src="/8.png" style={{ height: '400px', objectFit: 'cover' }}/>
        </div>

        </div>

        <div className='text-center text-white text-4xl'>
        

        </div>
    </div>
   
    
    </div>
  )
}

export default Partners