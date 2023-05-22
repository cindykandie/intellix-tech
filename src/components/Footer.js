import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
      <footer
        className="bg-gray-200 py-4 text-center"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div>
          <p className="text-gray-500">Contact: email@example.com</p>
          <p>
            <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <p className="text-blue-500">CEO Portfolio</p>
            </Link>
          </p>
        </div>
      </footer>
    );
  };
  
  
  export default Footer;
  