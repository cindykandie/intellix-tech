import React from 'react';
import Link from 'next/link';
import ToggleButton from './ThemeBtn';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-[100%] max-w-[1200px] m-[auto]">
      
        <Link href="/">
          <span className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity text-color-change">
            Intelli<span style={{ color: '#22d3ee' }}>Xar</span>
          </span>
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
