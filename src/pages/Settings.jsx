import React, { useState } from 'react'
import useTheme from '../hooks/useTheme';

const Settings = ({ websocketOptions, updateWebSocketOptions }) => {
    const { theme, toggleTheme } = useTheme();
    const [reconnectInterval, setReconnectInterval] = useState(websocketOptions.reconnectInterval || 5000);

    const handleReconnectIntervalChange = (e) => {
        const newInterval = parseInt(e.target.value, 10);
        setReconnectInterval(newInterval);
        updateWebSocketOptions({ ...websocketOptions, reconnectInterval: newInterval });
    };

    return (
        <div className='p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md'>
            <h1 className='text-xl font-bold mb-4 text-gray-900 dark:text-gray-100'>Settings</h1>

            {/* Theme Toggle*/}
            <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                    Theme
                </label>
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md dark:bg-blue-700"
                >
                    {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                </button>
            </div>
            {/* WebSocket Reconnect Interval */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          WebSocket Reconnect Interval (ms)
        </label>
        <input
          type="number"
          value={reconnectInterval}
          onChange={handleReconnectIntervalChange}
          className="p-2 border rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="1000"
          step="1000"
        />
      </div>

      {/* Add more settings here */}
        </div>
     
   

    )
}

export default Settings