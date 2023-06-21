import React, { useState } from 'react';
import Layout from '@/components/Layout';


const HomePage = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = 'IntelliXar - Living Limitlessly without Waiting for Permission';
  const longDescription = `IntelliXar is an extraordinary software company founded by Cindy Kandie, a visionary front-end engineer, with a mission to conquer the impossible in a world where AI serves as a companion. 
  
  The goal is to create groundbreaking solutions that redefine what is achievable. We believe in living limitlessly, without waiting for permission, and we empower individuals and businesses to do the same.

  At IntelliXar, we are passionate about pushing the boundaries of innovation and collaboration. Our focus lies in developing cutting-edge software products and providing custom software development services. With our expertise and dedication, we strive to create solutions that are not only technically advanced but also fun and collaborative.
  
  We believe in utilizing the latest technologies to deliver exceptional user experiences and enhance the efficiency of businesses across various industries.
  
  Join us on this exciting journey as we revolutionize the way technology empowers individuals and businesses. Welcome to IntelliXar, where innovation knows no boundaries. 🚀`;

  return (
    <Layout>
      <main className='custom-main flex-1 p-[10%] mb-10 pt-[50px] w-[100%] max-w-[800px]'>
        <h1 className="text-2xl font-bold mb-4">{shortDescription}</h1>
        {showFullDescription ? (
          <div>
            {longDescription}
            
          </div>
        ) : (
          <button onClick={toggleDescription} className="text-black-500 font-bold underline">
            Read More
          </button>
        )}
      </main>
    </Layout>
  );
};

export default HomePage;
