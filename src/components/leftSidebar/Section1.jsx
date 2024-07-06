import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <>
      <div className="flex gap-4 items-center text-gray-400 mb-4">
        <h1 className="text-sm">Favorites</h1>
        <h1 className="text-sm">Recently</h1>
      </div>
      <nav>
        <ul>
          <li className="flex items-center mb-2">
            <Link to="/" className="text-sm font-normal leading-5 text-center ">Get Started</Link>
          </li>
          <li className="flex items-center mb-2">
            <Link to="/" className="text-sm font-normal leading-5 text-center">Transactions</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section1;
