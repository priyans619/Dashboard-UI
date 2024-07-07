import React from 'react';

const RightSidebar = () => {

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="md:flex hidden flex-col w-[240px] h-screen py-10 px-6 bg-green-200">
        <h1 className="text-xl mb-4">Notifications</h1>
        <ul>
          <li className="mb-2">Notification 1</li>
          <li className="mb-2">Notification 2</li>
        </ul>
        <h1 className="text-xl mt-4 mb-4">Activity</h1>
        <ul>
          <li className="mb-2">Activity 1</li>
          <li className="mb-2">Activity 2</li>
        </ul>
      </div>

      
    </>
  );
};

export default RightSidebar;

