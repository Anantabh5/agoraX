import React from "react";
import Base from "./Base";

const Features = () => {
  return (
    <Base>
    <div>
        <h1 className="text-black text-9xl">Features</h1>
      <div className="flex flex-wrap justify-center items-center h-screen ">
  <ul className="w-full ">
    <li className="text-center text-lg text-slate-500" style={{ position: 'absolute', top: '20%', left: '15%' }}><img className='mx-auto max-w-full ' src="/2.png" style={{ height: '100px', objectFit: 'cover' }}/>Smart Contracts</li>
    <li className="text-center text-lg text-red-300" style={{ position: 'absolute', top: '30%', left: '58%' }}><img className='mx-auto max-w-full ' src="/3.png" style={{ height: '100px', objectFit: 'cover' }}/>Blockchain Technology</li>
    <li className="text-center text-lg text-green-500" style={{ position: 'absolute', top: '50%', left: '9%' }}><img className='mx-auto max-w-full ' src="/4.png" style={{ height: '100px', objectFit: 'cover' }}/>Security</li>
    <li className="text-center text-lg text-purple-500" style={{ position: 'absolute', top: '70%', left: '60%' }}><img className='mx-auto max-w-full ' src="/5.png" style={{ height: '100px', objectFit: 'cover' }}/>Transparency</li>
    <li className="text-center text-lg text-blue-500" style={{ position: 'absolute', top: '40%', left: '30%' }}><img className='mx-auto max-w-full ' src="/6.png" style={{ height: '100px', objectFit: 'cover' }}/>Automatic Payments</li>
    <li className="text-center text-lg text-indigo-500" style={{ position: 'absolute', top: '18%', left: '75%' }}><img className='mx-auto max-w-full ' src="/7.png" style={{ height: '100px', objectFit: 'cover' }}/>Traceability</li>
    <li className="text-center text-lg text-orange-300" style={{ position: 'absolute', top: '60%', left: '40%' }}><img className='mx-auto max-w-full ' src="/8.png" style={{ height: '100px', objectFit: 'cover' }}/>Efficiency</li>
    <li className="text-center text-lg text-gray-500" style={{ position: 'absolute', top: '50%', left: '83%' }}><img className='mx-auto max-w-full ' src="/9.png" style={{ height: '100px', objectFit: 'cover' }}/>Scalabililty</li>
  </ul>
</div>
    </div>
    </Base>
  );
};

export default Features;
