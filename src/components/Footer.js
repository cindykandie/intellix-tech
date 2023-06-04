import React from 'react';
import Link from 'next/link';
import BtBanner from './btBanner';

const Footer = () => {
    return (
      <div className='custom-footer'>
           <footer
        className="bg-gray-200 py-4 text-center"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className=''>
          <p className="text-gray-700">Contact: info@intellixar.com</p>
          <p>
            
              <p className="text-black-500 underline">
                <a href='https://devcindy.vercel.app'>
                CEO's Portfolio</a>
              </p>
              <a href="/">
                <p className="text-xl font-bold text-black-500">IntelliXar</p>
              </a>
          </p>
        </div>
      </footer>
      <BtBanner />
      </div>
     

    );
  };
  
  
  export default Footer;
  