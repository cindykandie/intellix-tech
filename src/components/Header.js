import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex gap-[70%] items-center p-4">
      <div className="mr-4">
        <Link href="/">
          <p className="text-xl font-bold text-black-500">IntelliXar</p>
        </Link>
      </div>
      <nav>
        
          
          <li className='mr-auto list-none'>
            <Link href="/projects">
              <p className="text-black-500 text-right">Products</p>
            </Link>
          </li>
        
      </nav>
    </header>
  );
};

export default Header;
