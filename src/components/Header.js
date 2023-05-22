import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center p-4">
      <div className="mr-4">
        <Link href="/">
          <p className="text-xl font-bold text-blue-500">Intellixar</p>
        </Link>
      </div>
      <nav>
        <ul className="flex list-none">
          <li className="mr-4">
            <Link href="/">
              <p className="text-blue-500">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="text-blue-500">Projects</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
