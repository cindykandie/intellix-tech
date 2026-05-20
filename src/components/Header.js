import React from 'react';
import Link from 'next/link';
import ToggleButton from './ThemeBtn';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-[100%] max-w-[1200px] m-[auto]">
      
        <Link href="/">
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ixBg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6d28d9"/>
                  <stop offset="100%" stopColor="#0891b2"/>
                </linearGradient>
                <linearGradient id="ixShine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="7" fill="url(#ixBg)"/>
              <rect width="32" height="16" rx="7" fill="url(#ixShine)"/>
              <text x="16" y="21.5" textAnchor="middle" fill="white"
                fontSize="13.5" fontWeight="900"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="-0.5">IX</text>
            </svg>
            <span className="text-xl font-bold text-color-change tracking-tight">
              Intelli<span style={{ background: 'linear-gradient(90deg,#7c3aed,#0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Xar</span>
            </span>
          </div>
        </Link>
  
        <div className='flex gap-8 items-center'>
          <Link href="/projects">
            <p className="text-black-500 text-right mt-0 pt-0 hover:underline text-color-change">Products</p>
          </Link>
          
          <ToggleButton />
        </div>
    </header>
  );
};

export default Header;
