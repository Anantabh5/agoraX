'use client'
import React from 'react';
import Card from './Card';
import Base2 from './Base2';
import { RevealList, RevealWrapper } from 'next-reveal';

const Services = () => {
  const services = [
    { id: 1, title: 'Blockchain Integration', description: 'Integrate blockchain for secure and transparent transactions' },
    { id: 2, title: 'Smart Contract Automation', description: 'Automate contracts with smart contract technology' },
    { id: 3, title: 'Supply Chain Visibility', description: 'Track and trace products across the supply chain' },
    { id: 4, title: 'Fraud Prevention', description: 'Prevent fraud with blockchain-based authentication' },
    { id: 5, title: 'Inventory Management', description: 'Efficiently manage inventory with blockchain solutions' },
    { id: 6, title: 'Data Security', description: 'Ensure data security through blockchain encryption' },
    { id: 7, title: 'Traceability Solutions', description: 'Implement traceability solutions for product authenticity' },
    { id: 8, title: 'Supply Chain Optimization', description: 'Optimize supply chain processes with blockchain technology' },
    { id: 9, title: 'Decentralized Finance (DeFi)', description: 'Explore DeFi solutions for supply chain financing' },
    // Add more services as needed
  ];

  return (
    <Base2>
    <div className="p-20 container mx-auto ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 py-8 pb-20">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {services.map(service => (
          <div key={service.id}>
          <RevealWrapper rotate={{x:0,y:0,z:10}} origin='right' delay={50} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}><Card key={service.id} title={service.title} description={service.description} /></RevealWrapper>
       </div> ))}
      </div>
      <div className="mb-0 mt-20 h-2 w-full bg-gradient-to-r from-white to-indigo-700 animate-pulse w-full"></div>

    </div>
    
    </Base2>
  );
};

export default Services;
