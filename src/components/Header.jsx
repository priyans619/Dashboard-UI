import React from 'react';
import { PiRocketLaunch, PiSidebar  } from "react-icons/pi";
import { AiTwotoneStar } from "react-icons/ai";


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

      
    </nav>
  );
};

export default Header;
