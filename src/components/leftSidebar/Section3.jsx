import React from 'react';
import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <>
      <h1 className=" mb-4">Pages</h1>
      <nav>
        <ul>
          <li className="mb-2"><Link to="/">Documentations</Link></li>
          <li className="mb-2"><Link to="/">Help Center</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Section3;
