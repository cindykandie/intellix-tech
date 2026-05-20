import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';


const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>IntelliXar</title>
        <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
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
