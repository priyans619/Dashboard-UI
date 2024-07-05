import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {

  return (
    <aside className="w-1/6 bg-blue-500 text-white p-4">
      <h1 className="text-2xl mb-4">PAGE</h1>
      <nav>
        <ul>
          <li className="mb-2">
            
              <ul className="ml-4 mt-2">
                <li className="mb-2"><Link to="/overview/page1">Page 1</Link></li>
                <li className="mb-2"><Link to="/overview/page2">Page 2</Link></li>
                <li className="mb-2"><Link to="/overview/page3">Page 3</Link></li>
              </ul>
            
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
