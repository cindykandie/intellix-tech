import React from 'react';
import BtBanner from './btBanner';

const Footer = () => {
    return (
      <div className='absolute bottom-0 left-0 right-0'>
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
              
             
                <p className="text-xl font-bold text-black-500">
                  <a href='mailto:intellixar.tech@gmail.com'>IntelliXar
                  </a>
                  </p>
             
          </div>
        </div>
      </footer>
      <BtBanner />
      </div>
     

    );
  };
  
  
  export default Footer;
  