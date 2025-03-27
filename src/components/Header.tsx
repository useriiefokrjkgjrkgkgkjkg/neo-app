'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 w-full bg-[#E5FFBA]">
        <div className="flex items-center bg-[#003B36] rounded-full px-4 py-2">
          <div className="w-6 h-6 bg-[#003B36] rounded-full flex items-center justify-center mr-2">
            <span className="text-white">💰</span>
          </div>
          <span className="text-white">0$</span>
        </div>
        
        <div className="text-[#003B36] text-3xl">
          <img src="https://i.imgur.com/QmBC4Ty.png" alt="N" className="h-8 w-auto" />
        </div>
        
        <button 
          className="w-10 h-10 bg-[#003B36] rounded-full flex items-center justify-center"
          onClick={() => setIsMenuOpen(true)}
        >
          <img src="https://i.imgur.com/r2fyuxJ.png" alt="Menu" className="w-6 h-6" />
        </button>
      </header>

      {/* Меню */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="fixed top-0 right-0 h-full w-64 bg-[#E5FFBA] p-4 z-50">
          <img src="https://i.imgur.com/gbBdw24.png" alt="Menu content" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
} 