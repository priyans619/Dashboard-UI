// src/components/RightSidebar.js

import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-1/6 bg-gray-200 p-4">
      <h1 className="text-xl mb-4">Notifications</h1>
      <ul>
        <li className="mb-2">Notification 1</li>
        <li className="mb-2">Notification 2</li>
        {/* Add more notifications as needed */}
      </ul>
      <h1 className="text-xl mt-4 mb-4">Activity</h1>
      <ul>
        <li className="mb-2">Activity 1</li>
        <li className="mb-2">Activity 2</li>
        {/* Add more activities as needed */}
      </ul>
    </div>
  );
};

export default RightSidebar;
