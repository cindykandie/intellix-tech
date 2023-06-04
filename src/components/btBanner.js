import React from 'react';

const BtBanner = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="custom-btbanner bg-grey text-black">
      <div className="mx-auto flex justify-center items-center font-bold">
        <p>Built on Good Vibes by Cindy Kandie | Copyright {currentYear}</p>
      </div>
    </div>
  );
};

export default BtBanner;
