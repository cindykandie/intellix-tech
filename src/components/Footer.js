import React from 'react';
import BtBanner from './btBanner';

const Footer = () => {
    return (
      <div className='mt-auto w-full'>
        <hr className="border-t border-gray-400 mx-5" />
           <footer
        className="transparent py-1 text-center"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className='text-color-change'>
          <p className="text-xs hover:underline">
            <a href='mailto:intellixar.tech@gmail.com'>
              Contact via Email
            </a>
          </p>
          <div>
            <p className="text-xs font-bold text-color-change">
              <a href='mailto:intellixar.tech@gmail.com'>IntelliXar</a>
            </p>
          </div>
        </div>
      </footer>
      <BtBanner />
      </div>
     

    );
  };
  
  
  export default Footer;
  