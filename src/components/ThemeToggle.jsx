import React from 'react'
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <button
    onClick={toggleTheme}
    className='p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white'
    >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to light Mode"}
    </button>
  );
};

export default ThemeToggle;