import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white flex sm:flex-auto shadow-lg rounded-lg overflow-hidden  mx-w-full sm:max-w-full hover:perspective-flipped">
      <div className="p-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Card;
