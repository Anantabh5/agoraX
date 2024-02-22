import React from "react";
import Base from "./Base";
import Image from "next/image";

const Features = () => {
  return (
    <Base>
  
    <div className="group-hover">
      
        <h1 className="text-red-300 text-9xl p-20 animate-pop  hover:text-white animate-fade-in-down">Features</h1>
      <div className="flex flex-wrap justify-center items-center h-screen flex-col">
  <ul className="w-full flex flex-col">
    <li className="text-center text-3xl text-slate-500 hover:transition-transform hover:translate-x-3 hover:translate-y-4" style={{ position: 'absolute', top: '20%', left: '15%' }}>
      <Image className='' src="/2.png" width={200} height={200} alt=""></Image>
        Smart Contracts</li>
    <li className="text-center text-3xl text-red-100 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '30%', left: '58%' }}><Image className='' src="/3.png" width={150} height={150} alt="" ></Image>Blockchain Technology</li>
    <li className="text-center text-3xl text-green-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '50%', left: '9%' }}><Image className='' src="/4.png" width={150} height={150}  alt=""></Image>Security</li>
    <li className="text-center text-3xl text-purple-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '70%', left: '60%' }}><Image className='' src="/5.png" width={150} height={150} alt=""></Image>Transparency</li>
    <li className="text-center text-3xl text-blue-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '40%', left: '30%' }}><Image className='' src="/6.png" width={150} height={150} alt=""></Image>Automatic Payments</li>
    <li className="text-center text-3xl text-indigo-500 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '18%', left: '75%' }}><Image className='' src="/7.png" width={150} height={150} alt=""></Image>Traceability</li>
    <li className="text-center text-3xl text-orange-300 hover:transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '60%', left: '40%' }}><Image className='' src="/8.png" width={150} height={150} alt=""></Image>Efficiency</li>
    <li className="text-center text-3xl text-gray-500 hover transition-transform hover:translate-y-3 hover:translate-x-3" style={{ position: 'absolute', top: '50%', left: '83%' }}><Image className='' src="/9.png" width={150} height={150} alt=""></Image>Scalabililty</li>
  </ul>
</div>
<div class="h-2 mb-20 w-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>

    </div>
    </Base>
  );
};

export default Features;
