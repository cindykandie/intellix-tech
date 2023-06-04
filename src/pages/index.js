import React, { useState } from 'react';
import Layout from '@/components/Layout';


const HomePage = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = 'IntelliXar - Living Limitlessly without Asking for Permission';
  const longDescription = `IntelliXar is a software company founded by a front-end developer, Cindy Kandie with a vision to tackle the impossible in a world where AI serves as a companion. My mission is to create innovative solutions that push the boundaries of what is achievable. I believe in living limitlessly without asking for permission, and I strive to empower individuals and businesses to do the same.
  
  To learn more about our journey and the latest developments in the field, check out our blog post on "The Power of AI and Human Collaboration".
  
  IntelliXar is a tech solutions company focused on creating innovative software products and providing custom software development services. This project showcases our company website built using Next.js, a powerful React framework for server-side rendering and static site generation. 🚀`;

  return (
    <Layout>
      <main className='custom-main flex-1 p-5 pt-[50px] w-[100%] max-w-[500px]'>
        <h1 className="text-4xl font-bold mb-4">{shortDescription}</h1>
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
