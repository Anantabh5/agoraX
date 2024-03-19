'use client'
import React from "react";
import Base from "./Base";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

const Features = () => {
  return (
   
    <Base className="overflow-hidden">
      
      <div className="group-hover">
      
      <h1 className="text-red-300 py-20 text-6xl md:text-9xl md:py-28 hover:text-white">Features</h1>
      {/* Original code */}
      <div class="lg:px-72 px-32 md:grid md:grid-cols-2 md:gap-20 lg:grid lg:grid-cols-2 hidden sm:hidden">
      
      <li className="flex flex-col px-6 items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
              
                <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
                className=" w-auto image h-auto rounded-full mb-4"
                src="/1.png"
                width="200"
                height="200"
                alt="Smart Contracts"
              /></RevealWrapper>
              <h4 className="text-2xl text-white font-semibold">Smart Contracts</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
            <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
                className="w-auto image h-auto rounded-full mb-4"
                src="/3.png"
                width="200"
                height="200"
                alt="Blockchain Tech"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Blockchain Tech</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
            <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/4.png"
                width="200"
                height="200"
                alt="Security"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Security</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
              <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/5.png"
                width="200"
                height="200"
                alt="Transparency"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Transparency</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
            <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/6.png"
                width="200"
                height="200"
                alt="Automatic Payments"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Automatic Payments</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
            <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/7.png"
                width="200"
                height="200"
                alt="Traceability"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Traceability</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
              <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/8.png"
                width="200"
                height="200"
                alt="Efficiency"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Efficiency</h4>
            </li>
            <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
            <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} ><Image
                className="w-48 h-48 rounded-full mb-4"
                src="/9.png"
                width="200"
                height="200"
                alt="Scalability"
              /></RevealWrapper>
              <h4 className="text-2xl font-semibold text-white ">Scalability</h4>
            </li>

      
    </div>
    

   
    <div className="sm:grid-cols-1  sm:grid sm:gap-4 sm:px-4 md:hidden">
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <div className="">
          <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
            className=" w-auto image h-auto rounded-full mb-4"
            src="/1.png"
            width="200"
            height="200"
            alt="Smart Contracts"
          /></RevealWrapper>
        </div>
        <h4 className="text-2xl text-white font-semibold">Smart Contracts</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={10} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
          className="w-auto image h-auto rounded-full mb-4"
          src="/3.png"
          width="200"
          height="200"
          alt="Blockchain Tech"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Blockchain Tech</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/4.png"
          width="200"
          height="200"
          alt="Security"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Security</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  5,  right:0,  bottom:  10,  left:5}}><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/5.png"
          width="200"
          height="200"
          alt="Transparency"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Transparency</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/6.png"
          width="200"
          height="200"
          alt="Automatic Payments"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Automatic Payments</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='right' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/7.png"
          width="200"
          height="200"
          alt="Traceability"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Traceability</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/8.png"
          width="200"
          height="200"
          alt="Efficiency"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Efficiency</h4>
      </li>
      <li className="feature flex flex-col items-center text-center transition-transform hover:translate-x-2 hover:translate-y-2">
        <RevealWrapper rotate={{x:0,y:0,z:0}} origin='left' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} ><Image
          className="w-48 h-48 rounded-full mb-4"
          src="/9.png"
          width="200"
          height="200"
          alt="Scalability"
        /></RevealWrapper>
        <h4 className="text-2xl font-semibold text-white ">Scalability</h4>
      </li>
    </div>
</div>
    </Base>
    
  );
};

export default Features;