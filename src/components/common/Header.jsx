import React from 'react'

const Header = ({ title, onSearch, onToggleTheme, currentTheme }) => {
  return (
    <header className='bg-gray-800 text-white px-4 py-3 flex justify-between items-center'>
        {/* Title*/}
        <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <nav className='hidden md:flex space-x-4'>
                <a href='/' className='hover:text-gray-300'>Home</a>
                <a href='/analytics' className='hover:text-gray-300'>Analytics</a>
                <a href='/settings' className='hover:text-gray-300'>Settings</a>
            </nav>
        </div>

        {/* Search and Theme Toggle */}
        <div className='flex items-center space-x-4'>
            {/* Search Bar */}
            <input
            type='text'
            placeholder='Search...'
           className="px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={(e) => onSearch(e.target.value)}
           />

           {/* Theme Toggle */}
           <button
           onClick={onToggleTheme}
           className='px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600'
           >
            {currentTheme === "light" ? "🌞" : "🌙"}
           </button>
        </div>
    </header>
  );
};

export default Header;