
import React from 'react'
import neon from './neon.module.css';

const Neon = () => {
  return (
    <div  className={`font-extrabold flex ${neon['Ncont']}`}>
        <div  className={neon.home}>
        <div className={`flex flex-row ${neon['top']}`}>
        
        
        <h1 className="text-5xl text-white p-20">Tech overtakes Management<span className='text-red-400 font-mono text-7xl'>  </span></h1>
         <div className={neon.light} >         
        <a href = "#"><h1> Blockchain Services for Modern Enterprises</h1></a>       
         </div>
        <div className='flex flex-row'>
         <img className='mx-auto max-w-full ' src="/2.png" style={{ height: '400px', objectFit: 'cover' }}/>
         <img className='mx-auto max-w-full ' src="/3.png" style={{ height: '400px', objectFit: 'cover' }}/>
        </div>

        </div>
    </div>
   
    
    </div>
  )
}

export default Neon