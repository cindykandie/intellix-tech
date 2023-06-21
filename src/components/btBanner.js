import React from 'react';

const BtBanner = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="custom-btbanner bg-grey text-black p-3 text-color-change">
      <div className="mx-auto flex justify-center items-center font-bold px-2 text-center">
        <p>Built on Good Vibes by <a href='https://devcindy.vercel.app' c className='hover:underline'>Cindy Kandie</a>  <br/> Copyright {currentYear}</p>
      </div>
    </div>
  );
};

export default BtBanner;
