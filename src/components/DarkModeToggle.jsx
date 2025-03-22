import React from 'react';
import { Sun, Moon } from "lucide-react"

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  const toggleStyles = `p-2 rounded-full transition-colors duration-200 ${
    darkMode ? "bg-gray-700 hover:bg-gray-600 text-yellow-300" : "bg-gray-100 hover:bg-gray-200 text-indigo-600"
  }`
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg z-10 ${toggleStyles}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;