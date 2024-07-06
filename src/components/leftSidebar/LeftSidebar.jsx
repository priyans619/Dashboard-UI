import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const LeftSidebar = () => {

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
    </>
  );
};

export default LeftSidebar;
