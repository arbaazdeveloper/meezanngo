// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar,isPathActive }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>

      <div className="absolute inset-0 bg-gray-600 opacity-50" onClick={toggleSidebar}></div>
      <div className={`fixed inset-y-0 right-0 w-64 bg-[#171717] p-4 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       <div className='flex justify-end mb-10'>

        <span onClick={toggleSidebar} className='text-white text-5xl'>&times;</span>
       </div>
      <div className='w-full flex justify-end '>
            <ul className='flex gap-10 flex-col items-end justify-end w-full '>
              <li>
                <Link onClick={toggleSidebar} className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b] ${isPathActive('/') && 'text-[#fdd65b]'}`} to='/'>Home</Link>
              </li>
              <li><Link onClick={toggleSidebar} className={`font-bold  text-3xl  text-white  transition-all duration-100 hover:text-[#fdd65b] ${isPathActive('/about') && 'text-[#fdd65b]'}`} to='/about'>About Us</Link></li>
              <li><Link onClick={toggleSidebar} className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b] ${isPathActive('/project') && 'text-[#fdd65b]'}`} to='/projects'>Projects</Link></li>
              <li><Link onClick={toggleSidebar} className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b] ${isPathActive('/events') && 'text-[#fdd65b]'}`} to='/events'>Events</Link></li>
              <li><Link onClick={toggleSidebar} className={`font-bold text-3xl  text-white transition-all duration-100 hover:text-[#fdd65b] ${isPathActive('/donation') && 'text-[#fdd65b]'}`} to=''>Donation</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
