import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

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
                {openSections.overview ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <Link to="/overview" className="ml-2 text-sm">Overview</Link>
            </div>
            {openSections.overview && (
              <ul className="text-sm ml-4 mt-2">
                {/* Add additional links or content here if needed */}
              </ul>
            )}
          </li>
          
          <li className="mb-2">
            <div className="flex items-center">
              <button onClick={() => toggleSection('transactions')} className="focus:outline-none">
                {openSections.transactions ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <Link to="/transactions" className="ml-2 text-sm">Transactions</Link>
            </div>
            {openSections.transactions && (
              <ul className="text-sm ml-4 mt-2">
                <li className="text-sm mb-2"><Link to="/transactions/page1">Page</Link></li>
                {/* Add additional links or content here if needed */}
              </ul>
            )}
          </li>
          
          {/* Add additional sections as needed */}
        </ul>
      </nav>
    </>
  );
};

export default Section2;
