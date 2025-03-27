'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 w-full bg-[#E5FFBA] relative">
        {/* Баланс */}
        <div className="relative">
          <img 
            src="https://imgur.com/68Dupqy" 
            alt="Balance background" 
            className="h-10"
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#003B36] text-lg font-medium">
            0$
          </span>
        </div>
        
        {/* Логотип */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img 
            src="https://i.imgur.com/hDtT2NR.png" 
            alt="N" 
            className="h-12 w-auto"
          />
        </div>
        
        {/* Меню */}
        <button 
          className="w-10 h-10 bg-[#003B36] rounded-full flex items-center justify-center z-10"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <div className="h-0.5 w-full bg-[#E5FFBA]"></div>
            <div className="h-0.5 w-full bg-[#E5FFBA]"></div>
            <div className="h-0.5 w-full bg-[#E5FFBA]"></div>
          </div>
        </button>
      </header>

      {/* Оверлей меню */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="fixed top-0 right-0 h-full w-64 bg-[#E5FFBA] p-4">
          <img 
            src="https://i.imgur.com/gbBdw24.png" 
            alt="Menu content" 
            className="w-full h-auto" 
          />
        </div>
      </div>
    </>
  );
} 