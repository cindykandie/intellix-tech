import React from "react";

const BtBanner = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="custom-btbanner bg-grey text-black text-color-change">
      <div className="mx-auto gap-0 justify-center items-center font-bold text-center">
          <a href="https://devcindy.vercel.app" c className="hover:underline">
            Built on Good Vibes
          </a>
          <br /> 
          Copyright {currentYear}
        
      </div>
    </div>
  );
};

export default BtBanner;
