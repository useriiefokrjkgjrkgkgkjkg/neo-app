'use client';

import { useState, useEffect } from 'react';

const images = [
  'https://i.imgur.com/bYR0xw8.png',
  'https://i.imgur.com/r3ojTdM.png',
  'https://i.imgur.com/Swyq8NY.png',
  'https://i.imgur.com/q18NojN.png'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-2">
      <div className="relative w-full aspect-[2/1] rounded-3xl bg-[#003B36] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#003B36] scale-125' 
                : 'bg-[#003B36] opacity-50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 