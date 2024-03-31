import React, { useState } from 'react';
import Sidebar from './Sidebar';
import logo from '../../assets/images/logo.png'
import Button1 from '../Buttons/Button1';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location=useLocation();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const isPathActive = (path) => {
    return location.pathname === path;
  }
  return (
    <div className="bg-white py-10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center lg:justify-start">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Logo" className="h-8" />
            <h1 className='text-lg font-extrabold text-[#171717] uppercase lg:text-2xl'>MEWS</h1>
          </div>

          <div className='m-auto hidden lg:block'>
            <ul className='flex gap-10'>
              <li>
                <Link className={`font-bold text-lg transition-all duration-100 hover:text-[#469620] ${window.location.pathname === '/' && 'text-[#469620]'}`} to='/'>Home</Link>
              </li>
              <li><Link className={`font-bold text-lg transition-all duration-100 hover:text-[#469620] ${isPathActive('/about') && 'text-[#469620]'}`} to='/about'>About Us</Link></li>
              <li><Link className={`font-bold text-lg transition-all duration-100 hover:text-[#469620] ${isPathActive('/projects') && 'text-[#469620]'}`} to='/projects'>Projects</Link></li>
              <li><Link className={`font-bold text-lg transition-all duration-100 hover:text-[#469620] ${isPathActive('/events') && 'text-[#469620]'}`} to='/events'>Events</Link></li>
            </ul>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:block'>
            <Button1 text={'Donate Now'} />
          </div>
        </div>
      </div>
      <Sidebar isPathActive={isPathActive} isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;