import React from 'react';
import { BiBugAlt } from "react-icons/bi";

const RightSidebar = () => {

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="md:flex hidden flex-col w-[240px] h-screen py-10 px-2 border-l border-gray-300 bg-green-200">
        <h1 className="text-sm font-semibold ml-2">Notifications</h1>
        <div className="flex items-center mb-2">
          <BiBugAlt className="w-8 h-7 text-sm py-1 rounded bg-[#E3F5FF]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">You have an issue that nee..</span>
            <span className="text-xs text-gray-400">Just now</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default RightSidebar;


