'use client';

import { useState, useEffect, useRef, TouchEvent } from 'react';

const images = [
  'https://i.imgur.com/bYR0xw8.png',
  'https://i.imgur.com/r3ojTdM.png',
  'https://i.imgur.com/Swyq8NY.png',
  'https://i.imgur.com/q18NojN.png'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout>();

  const startAutoplay = () => {
    // Очищаем предыдущий таймаут, если он есть
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    
    // Устанавливаем новый таймаут
    autoplayTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      startAutoplay(); // Перезапускаем автоплей для следующего слайда
    }, 10000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(difference) > minSwipeDistance) {
      if (difference > 0) {
        // Свайп влево
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else {
        // Свайп вправо
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      startAutoplay(); // Перезапускаем автоплей после свайпа
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startAutoplay(); // Перезапускаем автоплей после клика на точку
  };

  return (
    <div className="px-4 py-2">
      <div 
        className="relative w-full aspect-[2/1] rounded-3xl bg-[#003B36] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index < currentIndex
                  ? 'opacity-0 scale-95 -translate-x-full'
                  : 'opacity-0 scale-95 translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
              draggable="false"
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
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
} 