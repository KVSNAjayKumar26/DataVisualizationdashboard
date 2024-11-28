import React, { useState } from 'react'
import { FaChartBar, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`flex flex-col ${isCollapsed ? "w-16" : "w-64"
                } h-screen bg-gray-800 text-white transition-all duration-300`}
        >
            {/* Sidebar Header */}
            <div className='flex items-center justify-between p-4 bg-gray-900'>
                {!isCollapsed && <h1 className='text-xl font-bold'>Dashboard</h1>}
                <button
                    onClick={toggleSidebar}
                    className='p-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none'
                >
                    {isCollapsed ? "➡️" : "⬅️"}
                </button>
            </div>
            {/*Navigation Links */}
            <nav className='flex-1 flex flex-col gap-2 p-4'>
                <a
                    href='/'
                    className='flex items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-700'
                >
                    <FaHome />
                    {!isCollapsed && <span>Home</span>}
                </a>
                <a
                    href='/analytics'
                    className='flex items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-700'
                >
                    <FaChartBar />
                    {!isCollapsed && <span>Analytics</span>}
                </a>
                <a
                    href='/settings'
                    className='flex items-center gap-4 px-3 py-2 rounded-md hover:bg-gray-700"'
                >
                    <FaCog />
                    {!isCollapsed && <span>Settings</span>}
                </a>
            </nav>

            {/* Logout Button */}
            <div className="p-4">
                <button className="flex items-center gap-4 px-3 py-2 rounded-md w-full bg-red-600 hover:bg-red-500">
                    <FaSignOutAlt />
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
        </div>
    )
}

export default Sidebar