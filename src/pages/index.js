import React from 'react';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <main className='pt-[60px] max-w-[760px] text-color-change font-sans px-5'>

        <h1 className="text-xl font-extrabold leading-tight mb-2 tracking-tight">
          Living Limitlessly,<br />
          <span className="text-lg font-semibold opacity-70">without Waiting for Permission.</span>
        </h1>

        <p className="text-xs font-medium leading-relaxed mb-4 opacity-80 border-l-4 border-current pl-3">
          IntelliXar is an extraordinary software company founded with a mission to conquer the impossible
          in a world where AI serves as a companion.
        </p>

        <div className="space-y-3 text-xs leading-relaxed opacity-90">
          <p>
            The goal is to create groundbreaking solutions that redefine what is achievable. We believe in
            living limitlessly, without waiting for permission — and we empower individuals and businesses
            to do the same.
          </p>
          <p>
            At IntelliXar, we are passionate about pushing the boundaries of innovation and collaboration.
            Our focus lies in developing cutting-edge software products and providing custom software
            development services. With our expertise and dedication, we strive to create solutions that
            are not only technically advanced but also fun and collaborative.
          </p>
          <p>
            We believe in utilizing the latest technologies to deliver exceptional user experiences and
            enhance the efficiency of businesses across various industries.
          </p>
          <p className="font-medium">
            Join us on this exciting journey as we revolutionize the way technology empowers individuals
            and businesses. Welcome to IntelliXar — where innovation knows no boundaries. 🚀
          </p>
        </div>

      </main>
    </Layout>
  );
};

export default HomePage;
