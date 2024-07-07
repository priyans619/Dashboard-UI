import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";

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

  const [activeLink, setActiveLink] = useState('');

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <h1 className="text-sm mb-2 mt-4 text-gray-400">Pages</h1>
      <nav>
        <ul className=''>
          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'overview' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('overview')} className="focus:outline-none">
                {openSections.overview ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <PiRocketLaunch className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/overview" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('overview')}
              >
                Overview
              </Link>
            </div>
            {openSections.overview && (
              <ul className="text-sm ml-4 mt-2">
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'transactions' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('transactions')} className="focus:outline-none">
                {openSections.transactions ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <CiDollar className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/transactions" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('transactions')}
              >
                Transactions
              </Link>
            </div>
            {openSections.transactions && (
              <ul className="text-sm ml-4 mt-2">
                <li className="text-sm mb-2"><Link to="/transactions/page1">Page</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section2;
