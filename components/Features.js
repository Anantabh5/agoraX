import React from "react";
import Base from "./Base";

const Features = () => {
  return (
    <Base>
  
    <div className="group-hover">
      
        <h1 className="text-red-300 text-9xl p-20 animate-pop  hover:text-white animate-fade-in-down">Features</h1>
      <div className="flex flex-wrap justify-center items-center h-screen ">
  <ul className="w-full ">
    <li className="text-center text-3xl text-slate-500 hover:transition-transform hover:translate-x-3 hover:translate-y-4" style={{ position: 'absolute', top: '20%', left: '15%' }}><img className='mx-auto max-w-full ' src="/2.png" style={{ height: '100px', objectFit: 'cover' }}/>Smart Contracts</li>
    <li className="text-center text-3xl text-red-100 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '30%', left: '58%' }}><img className='mx-auto max-w-full ' src="/3.png" style={{ height: '100px', objectFit: 'cover' }}/>Blockchain Technology</li>
    <li className="text-center text-3xl text-green-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '50%', left: '9%' }}><img className='mx-auto max-w-full ' src="/4.png" style={{ height: '100px', objectFit: 'cover' }}/>Security</li>
    <li className="text-center text-3xl text-purple-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '70%', left: '60%' }}><img className='mx-auto max-w-full ' src="/5.png" style={{ height: '100px', objectFit: 'cover' }}/>Transparency</li>
    <li className="text-center text-3xl text-blue-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '40%', left: '30%' }}><img className='mx-auto max-w-full ' src="/6.png" style={{ height: '100px', objectFit: 'cover' }}/>Automatic Payments</li>
    <li className="text-center text-3xl text-indigo-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '18%', left: '75%' }}><img className='mx-auto max-w-full ' src="/7.png" style={{ height: '100px', objectFit: 'cover' }}/>Traceability</li>
    <li className="text-center text-3xl text-orange-300 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '60%', left: '40%' }}><img className='mx-auto max-w-full ' src="/8.png" style={{ height: '100px', objectFit: 'cover' }}/>Efficiency</li>
    <li className="text-center text-3xl text-gray-500 hover transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '50%', left: '83%' }}><img className='mx-auto max-w-full ' src="/9.png" style={{ height: '100px', objectFit: 'cover' }}/>Scalabililty</li>
  </ul>
</div>
<div class="h-2 mb-20 w-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>

    </div>
    </Base>
  );
};

export default Features;
