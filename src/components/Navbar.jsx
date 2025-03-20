import React, { useState } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-xl font-bold">
                Portfolio
              </a>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="py-5 px-3 hover:text-blue-500">Home</a>
            <a href="#about" className="py-5 px-3 hover:text-blue-500">About</a>
            <a href="#projects" className="py-5 px-3 hover:text-blue-500">Projects</a>
            <a href="#contact" className="py-5 px-3 hover:text-blue-500">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button p-2">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#home" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
        <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
        <a href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
        <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
        <button
          onClick={toggleDarkMode}
          className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;