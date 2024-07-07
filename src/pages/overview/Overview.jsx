import React from 'react';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';
import Revenue from '../../assets/Revenue.png';
import TransactionsImg from '../../assets/Transactions.png';
import Transaction1Img from '../../assets/Transaction1.png';
import Transaction2Img from '../../assets/Transaction2.png';

const Overview = () => {
  return (
    <div className="p-4 h-full bg-[#F7F9FB]">
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
        <div className="bg-[#DBE6F2] p-6 w-52 h-28 rounded-2xl flex-shrink-0">
          <h3 className="text-sm font-semibold mb-2 text-black">Transactions</h3>
          <div className="flex gap-8 items-center">
            <span className="text-2xl font-semibold text-black">14K</span>
            <span className="flex items-center text-black font-normal ml-2">
              <span className="text-xs mr-1">-0.03%</span>
              <HiArrowTrendingDown className="text-gray-600" />
            </span>
          </div>
        </div>
        <div className="bg-[#F9FEF0] p-6 w-52 h-28 rounded-2xl flex-shrink-0">
          <h3 className="text-sm font-semibold mb-2 text-black">Average Transactions</h3>
          <div className="flex gap-8 items-center">
            <span className="text-2xl font-semibold text-black">$2K</span>
            <span className="flex items-center text-black font-normal ml-2">
              <span className="text-xs mr-1">+15.03%</span>
              <HiArrowTrendingUp className="text-gray-600" />
            </span>
          </div>
        </div>
        <div className="bg-[#DBE6F2] p-6 w-52 h-28 rounded-2xl flex-shrink-0">
          <h3 className="text-sm font-semibold mb-2 text-black">Refunds</h3>
          <div className="flex gap-8 items-center">
            <span className="text-2xl font-semibold text-black">1K</span>
            <span className="flex items-center text-black font-normal ml-2">
              <span className="text-xs mr-1">+6.08%</span>
              <HiArrowTrendingUp className="text-gray-600" />
            </span>
          </div>
        </div>

      </div>

      <div className="flex flex-wrap gap-16 justify-center lg:justify-start mt-8">

      <div className="w-full sm:w-[432px] h-auto sm:h-[330px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src={Revenue} alt="Revenue" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[330px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src={TransactionsImg} alt="Transactions" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[280px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src={Transaction1Img} alt="Transaction 1" className="w-full h-full object-cover" />
        </div>

        <div className="w-full sm:w-[432px] h-auto sm:h-[280px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <img src={Transaction2Img} alt="Transaction 2" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  );
};

export default Overview;
