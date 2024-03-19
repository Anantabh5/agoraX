import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white flex sm:flex-auto shadow-lg rounded-lg overflow-hidden  mx-w-full sm:max-w-full hover:perspective-flipped transition-transform hover:translate-x-2 hover:translate-y-2">
      <div className="lg:p-12 p-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
