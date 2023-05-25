import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BtBanner from './btBanner';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <BtBanner />
    </div>
  );
};

export default Layout;
