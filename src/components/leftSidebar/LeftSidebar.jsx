import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const LeftSidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="md:flex hidden flex-col w-[240px] h-screen py-10 px-6 bg-[#F7F9FB]">
        <div className="flex items-center mb-6">
          <img src="src/assets/logo.png" alt="logo" className="w-6" />
          <h1 className="ml-2 text-black font-normal text-sm ">Superstars AI</h1>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>

      {/* Hamburger Menu Button */}
      <div className="absolute md:hidden block top-6 right-3 z-10">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 h-screen z-0 w-full bg-gray-500 backdrop-blur-lg p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <div className="flex items-center mb-6">
          <img src="src/assets/logo.png" alt="logo" className="w-6" />
          <h1 className="ml-2 text-black font-normal text-sm ">Superstars AI</h1>
        </div>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};

export default LeftSidebar;
