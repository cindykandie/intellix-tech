import React from 'react';

const ProjectNav = () => {
  return (
    <nav className="flex text-color-change">
      <ul className="list-none flex">
        <li className="mr-4 border-r pr-4">Main Products</li>
        <li className="mr-4 border-r pr-4">Open Source</li>
        <li className="mr-4 border-r pr-4">Portfolios</li>
        <li>Partners</li>
      </ul>
    </nav>
  );
};

export default ProjectNav;
