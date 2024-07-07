import React from 'react';
import { BiBugAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { TbCloudStar } from "react-icons/tb";
import { PiBroadcast } from "react-icons/pi";
import Iconset1 from '../assets/Iconset1.png';
import Iconset2 from '../assets/Iconset2.png';
import Iconset3 from '../assets/Iconset3.png';
import Iconset4 from '../assets/Iconset4.png';

const RightSidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-[240px] h-screen py-10 px-2 border-l border-gray-300 bg-[#F7F9FB]">
        <h1 className="text-sm font-semibold ml-2">Notifications</h1>
        <div className="flex items-center mb-2">
          <BiBugAlt className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E3F5FF]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">You have an issue that needs attention</span>
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
            <span className="text-sm text-black font-normal">New product feature available</span>
            <span className="text-xs text-gray-400">12 hours ago</span>
          </div>
        </div>

        <div className="flex items-center mb-8">
          <PiBroadcast className="w-8 h-7 text-sm py-1 rounded-lg bg-[#E5ECF6]" />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">Andi Lane subscribed to you</span>
            <span className="text-xs text-gray-400">today, 11:59 AM</span>
          </div>
        </div>

        <h1 className="text-sm font-semibold ml-2">Activity</h1>
        <div className="flex items-center mb-2">
          <img src={Iconset1} alt="logo" className="w-6 h-8 text-sm py-1 rounded-lg " />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">Discount details updated</span>
            <span className="text-xs text-gray-400">Just now</span>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <img src={Iconset2} alt="Iconset2" className="w-6 h-8 text-sm py-1 rounded-lg " />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">Aman added a new product</span>
            <span className="text-xs text-gray-400">59 minute ago</span>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <img src={Iconset3} alt="Iconset3" className="w-6 h-8 text-sm py-1 rounded-lg " />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">Refunds cleared</span>
            <span className="text-xs text-gray-400">12 hours ago</span>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <img src={Iconset4} alt="Iconset4" className="w-6 h-8 text-sm py-1 rounded-lg " />
          <div className="flex flex-col ml-3 mt-3">
            <span className="text-sm text-black font-normal">You have an issue that needs attention</span>
            <span className="text-xs text-gray-400">Today, 11:59 AM</span>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default RightSidebar;
