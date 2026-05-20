import React from 'react';
import Link from 'next/link';
import ToggleButton from './ThemeBtn';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-[100%] max-w-[1200px] m-[auto]">
      
        <Link href="/">
          <p className="text-3xl font-bold text-black-500 hover:underline text-color-change">IntelliXar</p>
        </Link>
  
        <div className='flex gap-8 items-center'>
          <Link href="/projects">
            <p className="text-black-500 text-right mt-0 pt-0 hover:underline text-color-change">Products</p>
          </Link>
          {/* <Link href="/ai-radar">
            <p className="text-right mt-0 pt-0 font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#22d3ee', textShadow: '0 0 12px rgba(34,211,238,0.5)' }}>
              AI Radar
            </p>
          </Link> */}
          <ToggleButton />
        </div>
    </header>
  );
};

export default Header;
