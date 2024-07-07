import React from 'react';

const Overview = () => {
  return (
    <div className="p-4 h-full bg-[#4993dc]">
      <h2 className=" flex flex-wrap justify-left text-sm text-left py-2 mt-2 font-semibold mb-4">Today</h2>
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
        
        <div className="bg-[#F9FEF0] p-6 w-52 h-28 rounded-2xl shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 1</h3>
          <p className="text-gray-600">Content 1</p>
        </div>
        
        <div className="bg-[#DBE6F2] p-6 w-52 h-28 rounded-2xl shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 2</h3>
          <p className="text-gray-600">Content 2</p>
        </div>
        
        <div className="bg-[#F9FEF0] p-6 w-52 h-28 rounded-2xl shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 3</h3>
          <p className="text-gray-600">Content 3</p>
        </div>
        
        <div className="bg-[#DBE6F2] p-6 w-52 h-28 rounded-2xl shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 4</h3>
          <p className="text-gray-600">Content 4</p>
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
