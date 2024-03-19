"use client"
import React, { useState, useEffect, useRef } from 'react';

const Counting = () => {
  const [counter, setCounter] = useState(400);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting up to 5000
            const interval = setInterval(() => {
              setCounter(prevCounter => {
                if (prevCounter >= 795) {
                  clearInterval(interval);
                  return 795; // Ensure counter stops at 5000
                }
                return prevCounter + 1;
              });
            }, 10); // Adjust the interval as needed for smooth counting

            // Unobserve the target once it's visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    // Observe the target component
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={counterRef} className="container mx-auto p-6 bg-gray-200 rounded-lg shadow-lg "  >
      <h1 className="text-3xl font-bold text-center text-gray-800"><span className='text-8xl'>$</span> saved by <span className='text-black font-mono text-6xl '> agoraX</span> in management costs</h1>
      <div className="mt-4 flex justify-center items-center">
        <div className="w-40 h-24 flex justify-center items-center bg-blue-500 rounded-full ">
          <h2 className="text-4xl font-bold text-white">{counter}</h2>
        </div>
      </div>
    </div>
  );
};

export default Counting;
