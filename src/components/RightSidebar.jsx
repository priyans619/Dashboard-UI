import React from 'react';
import { BiBugAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { TbCloudStar } from "react-icons/tb";
import { PiBroadcast } from "react-icons/pi";


const RightSidebar = () => {

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="md:flex hidden flex-col w-[240px] h-screen py-10 px-2 border-l border-gray-300 bg-[#F7F9FB]">
        <h1 className="text-sm font-semibold ml-2">Notifications</h1>
        <div className="flex items-center mb-2">
          <BiBugAlt className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E3F5FF]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">You have an issue that nee..</span>
            <span className="text-xs text-gray-400">Just now</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <CiUser className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E5ECF6]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">New team member joined</span>
            <span className="text-xs text-gray-400">59 minutes ago</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <TbCloudStar className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E3F5FF]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">New product feature avail...</span>
            <span className="text-xs text-gray-400">12 hours ago</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <PiBroadcast className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E5ECF6]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">Andi Lane subscribed to you</span>
            <span className="text-xs text-gray-400">today, 11.59 AM</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default RightSidebar;


