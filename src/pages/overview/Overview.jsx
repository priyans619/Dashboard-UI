import React from 'react';

const Overview = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Overview Page</h2>
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
        
        <div className="bg-white p-6 w-52 h-28 rounded-lg shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 1</h3>
          <p className="text-gray-600">Content 1</p>
        </div>
        
        <div className="bg-white p-6 w-52 h-28 rounded-lg shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 2</h3>
          <p className="text-gray-600">Content 2</p>
        </div>
        
        <div className="bg-white p-6 w-52 h-28 rounded-lg shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 3</h3>
          <p className="text-gray-600">Content 3</p>
        </div>
        
        <div className="bg-white p-6 w-52 h-28 rounded-lg shadow-md flex-shrink-0">
          <h3 className="text-xl">Card 4</h3>
          <p className="text-gray-600">Content 4</p>
        </div>
      </div>
      

    </div>
  );
};

export default Overview;
