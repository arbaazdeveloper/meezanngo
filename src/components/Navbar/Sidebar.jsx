// Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-600 opacity-50" onClick={toggleSidebar}></div>
      <div className={`fixed inset-y-0 right-0 w-64 bg-[#171717] p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       
      <div className='w-full flex justify-end '>
            <ul className='flex gap-10 flex-col items-end justify-end w-full '>
              <li>
                <a className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b]`} href=''>Home</a>
              </li>
              <li><a className={`font-bold  text-3xl  text-white  transition-all duration-100 hover:text-[#fdd65b]`} href=''>About Us</a></li>
              <li><a className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b]`} href=''>Projects</a></li>
              <li><a className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b]`} href=''>Events</a></li>
              <li><a className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b]`} href=''>Donation</a></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
