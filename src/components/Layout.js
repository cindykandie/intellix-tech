import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BtBanner from './btBanner';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='main-container'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
