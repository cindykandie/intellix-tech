import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';


const HomePage = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = 'Intellixar - Living Limitlessly without Asking for Permission';
  const longDescription = `Intellixar is a software company founded by a front-end developer with a vision to tackle the impossible in a world where AI serves as a companion. Our mission is to create innovative solutions that push the boundaries of what is achievable. We believe in living limitlessly without asking for permission, and we strive to empower individuals and businesses to do the same.

  To learn more about our journey and the latest developments in the field, check out our blog post on "The Power of AI and Human Collaboration".`;

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">{shortDescription}</h1>
      {showFullDescription ? (
        <div>
          <p>{longDescription}</p>
          
        </div>
      ) : (
        <button onClick={toggleDescription} className="text-blue-500">
          Read More
        </button>
      )}
    </Layout>
  );
};

export default HomePage;
