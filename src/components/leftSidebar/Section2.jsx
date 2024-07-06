import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  ;

const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };
  
  return (
    <>
      <h1 className="text-sm mb-2 mt-4 text-gray-400">Pages</h1>
      <nav>
        <ul className=''>
          <li className="mb-2">
            <div className="flex items-center">
              <button onClick={() => toggleSection('overview')} className="focus:outline-none">
                {openSections.overview ? '<' : '>'}
              </button>
              <Link to="/overview" className="ml-2 text-sm">Overview</Link>
            </div>
            
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section2;
