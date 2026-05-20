import React from 'react';
import BtBanner from './btBanner';

const Footer = () => {
    return (
      <div className='mt-auto w-full'>
           <footer
        className="transparent py-2 text-center"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className='text-color-change'>
          <p className="hover:underline">
            <a href='mailto:intellixar.tech@gmail.com'>
              Contact via Email
            </a>
          </p>
          <div>
            <p className="text-xl font-bold text-color-change">
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
  