import React from 'react';
import Link from 'next/link';
import ToggleButton from './ThemeBtn';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 w-[100%] max-w-[1200px] m-[auto]">
      
        <Link href="/">
          <p className="text-xl font-bold text-black-500 hover:underline text-color-change">IntelliXar</p>
        </Link>
  
        <div className='flex gap-8'>
        <Link href="/projects">
          <p className="text-black-500 text-right mt-0 pt-0 hover:underline text-color-change">Products</p>
          </Link>
          <ToggleButton />
         </div>
    </header>
  );
};

export default Header;
