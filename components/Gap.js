"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Gap = () => {
  const elementRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.75, // Observe when 75% of element is visible
  });

  useEffect(() => {
    if (inView) {
      startAnimation();
    }
  }, [inView]);

  const startAnimation = () => {
    gsap.to(elementRef.current, {
      duration: 1,
      ease: 'power3.inOut',
      x: 0, // Slide in from right
      opacity: 1, // Fade in
      // Add other GSAP properties for your desired animation
    });
  };

  return (
    <div ref={ref} className="text-xl font-bold mt-10 opacity-0">
      Your content here
    </div>
  );
};

export default Gap;
