import React from 'react';
import BtBanner from './btBanner';

const Footer = () => {
    return (
      <div className='custom-footer h-[100px]'>
           <footer
        className="bg-gray-200 py-2 text-center"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className=''>
          <p className="text-gray-700  hover:underline">
            <a href='mailto:intellixar.tech@gmail.com'>
              Contact via Email
            </a>
        </p>
          <div>
              <p className="text-black-500 underline">
                <a href='https://devcindy.vercel.app'>
                CEO's Portfolio</a>
              </p>
              <a href="/">
                <p className="text-xl font-bold text-black-500">IntelliXar</p>
              </a>
          </div>
        </div>
      </footer>
      <BtBanner />
      </div>
     

    );
  };
  
  
  export default Footer;
  