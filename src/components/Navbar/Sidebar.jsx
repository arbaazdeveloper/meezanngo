// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-600 opacity-50" onClick={toggleSidebar}></div>
      <div className={`fixed inset-y-0 right-0 w-64 bg-[#171717] p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Sidebar content */}
        <ul>
          <li className="text-gray-300 text-2xl font-extrabold">Menu Item 1</li>
          <li className="text-gray-300">Menu Item 2</li>
          <li className="text-gray-300">Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
