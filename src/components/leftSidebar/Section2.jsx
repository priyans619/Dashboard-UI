import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
  const [openSections, setOpenSections] = useState({
    overview: false,
    transactions: false,
    invoices: false,
    customers: false,
    productCatalogs: false,
    reports: false,
    checkout: false,
    businessAccount: false,
    developerTools: false
  });

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
            {openSections.overview && (
              <ul className="text-sm ml-4 mt-2">
                <li className="mb-2"><Link to="/overview/page1">Page 1</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section2;
