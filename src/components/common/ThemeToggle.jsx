import React from 'react'

const ThemeToggle = ({ currentTheme, onToggleTheme }) => {
  return (
    <button 
    onClick={onToggleTheme}
    className='px-3 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
    aria-label={`Switch to ${currentTheme === "light" ? "dark": "light"} mode`}
    >
        {currentTheme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;