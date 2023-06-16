import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      
        <Link href="/">
          <p className="text-xl font-bold text-black-500">IntelliXar</p>
        </Link>
  
        <Link href="/projects">
          <p className="text-black-500 text-right mt-0 pt-0">Products</p>
        </Link>
    </header>
  );
};

export default Header;
