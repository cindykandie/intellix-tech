import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BtBanner from './btBanner';
import Head from 'next/head';


const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>IntelliXar</title>
        <link rel="icon" type="image/x-icon" href="/assets/icons/logo.png"></link>
      </Head>
      <Header />
      <div className='main-container'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
