import React from 'react';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';

const Overview = () => {
  return (
    <div className="p-4 h-full bg-[#4993dc]">
      <h2 className=" flex flex-wrap justify-left text-sm text-left py-2 mt-2 font-semibold mb-4">Today</h2>
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start">

        <div className="bg-[#F9FEF0] p-6 w-52 h-28 rounded-2xl flex-shrink-0">
          <h3 className="text-sm font-semibold mb-2 text-black">Revenue</h3>
          <div className="flex gap-8 items-center">
            <span className="text-2xl font-semibold text-black">$24</span>
            <span className="flex items-center text-black font-normal ml-2">
              <span className="text-xs mr-1">+11.01%</span>
              <HiArrowTrendingUp className="text-gray-600" />
            </span>
          </div>
        </div>
        

      </div>

      <div className="flex flex-wrap gap-16 justify-center lg:justify-start mt-8">

        <div className="w-full sm:w-[432px] h-auto sm:h-[330px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src="src/assets/Revenue.png" alt="Image 1" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[330px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src="src/assets/Transactions.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[280px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src="src/assets/Transaction1.png" alt="Image 1" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[280px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src="src/assets/Transaction2.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
};

export default Overview;
