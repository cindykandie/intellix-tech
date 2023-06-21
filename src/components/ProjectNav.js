import React from 'react';

const ProjectNav = () => {
  return (
    <nav className="flex text-color-change">
      <ul className="list-none flex">
        <li className="mr-4 border-r pr-4">
          <a href="#" className="hover:underline hover:font-bold">
            Main Products
          </a>
        </li>
        <li className="mr-4 border-r pr-4">
          <a href="#" className="hover:underline hover:font-bold">
            Open Source
          </a>
        </li>
        <li className="mr-4 border-r pr-4">
          <a href="#" className="hover:underline hover:font-bold">
            Portfolios
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:font-bold">
            Partners
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default ProjectNav;