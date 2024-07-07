import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { PiRocketLaunch } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { FaFileInvoice } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { TbUserSquare } from "react-icons/tb";
import { BsMinecartLoaded } from "react-icons/bs";
import { LuBookMinus } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

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
          
          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'inoices' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('invoices')} className="focus:outline-none">
                {openSections.transactions ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <FaFileInvoice className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/invoices" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('invoices')}
              >
                Invoices
              </Link>
            </div>
            {openSections.transactions && (
              <ul className="text-sm ml-4 mt-2">
                {/* <li className="text-sm mb-2"><Link to="/transactions/page1"></Link></li> */}
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'customers' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('customers')} className="focus:outline-none">
                {openSections.customers ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <FiUsers className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/customers" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('customers')}
              >
                Customers
              </Link>
            </div>
            {openSections.customers && (
              <ul className="text-sm ml-4 mt-2">
            
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'productCatalogs' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('productCatalogs')} className="focus:outline-none">
                {openSections.productCatalogs ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <CiViewList className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/productCatalogs" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('productCatalogs')}
              >
                Product Catalogs
              </Link>
            </div>
            {openSections.productCatalogs && (
              <ul className="text-sm ml-4 mt-2">
                <li className="text-sm mb-2"><Link to="/">Overview</Link></li>
                <li className="text-sm mb-2"><Link to="/">Products</Link></li>
                <li className="text-sm mb-2"><Link to="/">Discounts</Link></li>
                <li className="text-sm mb-2"><Link to="/">Taxable Items</Link></li>              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'reports' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('reports')} className="focus:outline-none">
                {openSections.reports ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <TbUserSquare className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/reports" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('reports')}
              >
                Reports
              </Link>
            </div>
            {openSections.reports && (
              <ul className="text-sm ml-4 mt-2">
                
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'checkout' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('checkout')} className="focus:outline-none">
                {openSections.checkout ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <BsMinecartLoaded className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/checkout" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('checkout')}
              >
                Checkout
              </Link>
            </div>
            {openSections.checkout && (
              <ul className="text-sm ml-4 mt-2">
                
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'businessAccount' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('businessAccount')} className="focus:outline-none">
                {openSections.businessAccount ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <LuBookMinus className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/businessAccount" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('businessAccount')}
              >
                Business Account
              </Link>
            </div>
            {openSections.businessAccount && (
              <ul className="text-sm ml-4 mt-2">
                
              </ul>
            )}
          </li>

          <li className="mb-2">
            <div className={`flex items-center rounded-md p-1 ${activeLink === 'developerTools' ? 'bg-gray-200' : ''}`}>
              <button onClick={() => toggleSection('developerTools')} className="focus:outline-none">
                {openSections.developerTools ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </button>
              <IoSettingsOutline className="text-gray-600 text-xl ml-2" />
              <Link 
                to="/developerTools" 
                className="ml-2 text-sm" 
                onClick={() => handleLinkClick('developerTools')}
              >
                Developer Tools
              </Link>
            </div>
            {openSections.developerTools && (
              <ul className="text-sm ml-4 mt-2">
                
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Section2;
