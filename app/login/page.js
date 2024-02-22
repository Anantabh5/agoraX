"use client"
import Base from '@/components/Base';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';


const Login = () => {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){

        
    }

  return(   
    <Base>
    <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: `url('/.png')` }}>
  
  <div className="mx-auto max-w-md text-gray-600 body-font relative z-10">
    <div className="container opacity-100  px-5 py-24 mx-auto flex flex-wrap items-center">

      <div className="bg-gray-300 bg-opacity-40 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login to agoraX</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-xl text-gray-900">Email Id</label>
          <input type="email" id="full-name" name="email" onChange={(e) => setEmail(e.target.value)} placeholder='enter email here' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-xl text-gray-900">Password</label>
          <input type="password" id="email" name="password" onChange={(e) => setPassword(e.target.value)} placeholder='enter password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button onClick={submit} className=" bg-black hover:bg-gray-500 transition-colors duration-200 text-white border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
      </div>
    </div>
    <h1 className="mb-10 font-extrabold text-2xl text-white text-center">OR</h1>
    <Link href="/signup" className="flex  justify-center bg-transparent text-2xl hover:bg-white  hover:text-black text-white  font-bold py-2 px-4 rounded transition-all duration-300">Sign up</Link>
  </div>
</section>
</Base>
)
}

export default Login