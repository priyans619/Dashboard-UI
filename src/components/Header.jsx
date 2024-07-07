import React from 'react';
import { PiRocketLaunch, PiSidebar } from "react-icons/pi";
import { AiTwotoneStar } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { FiBell } from "react-icons/fi";

import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <nav className="bg-[#F7F9FB] p-4 border-b border-gray-300 flex justify-between items-center">
      {/* Left side icons */}
      <div className="flex items-center space-x-4">
        <PiRocketLaunch className="text-gray-600 text-xl cursor-pointer" />
        <AiTwotoneStar className="text-gray-600 text-xl cursor-pointer" />
        <span className="flex items-center space-x-2 cursor-pointer">
          <span className="text-black hover:text-gray-300">Pages</span>
          <span className="text-black">/</span>
          <span className="text-black hover:text-gray-300">Overview</span>
        </span>
      </div>

      {/* Right side search bar and icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2 text-gray-600" />
          <input
            type="text"
            className="text-center pl-10 pr-10 py-2 border bg-gray-200 border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
            placeholder="Search"
            style={{ borderRadius: '8px', padding: '4px 8px', }}
          />

          <img src="src/assets/icon.png" alt="logo" className="absolute right-3 top-2 w-4 h-4" />
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
