import React, { useState } from 'react'
import Header from './components/common/Header';
import Sidebar from './components/layout/Sidebar';
import DashboardGrid from './components/layout/DashboardGrid';
import DataTable from './components/tables/DataTable';
import Settings from './pages/Settings';

//import ThemeToggle from './components/ThemeToggle';

/*import ThemeToggle from './components/common/ThemeToggle';*/

const App = () => {
  const [websocketOptions, setWebSocketOptions] = useState({ reconnectInterval: 5000 })

    const updateWebSocketOptions = (options) => {
      setWebSocketOptions(options);
      console.log("Updated WebSocket options:", options);
    };

  
  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Email", accessor: "email" },
    { label: "Age", accessor: "age" },
    { label: "Role", accessor: "role" },
  ];

  const data = [
    { name: "John Doe", email: "john@example.com", age: 28, role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", age: 34, role: "Editor" },
    { name: "Sam Green", email: "sam@example.com", age: 23, role: "Viewer" },
    { name: "Lisa Brown", email: "lisa@example.com", age: 29, role: "Editor" },
    { name: "Tom White", email: "tom@example.com", age: 41, role: "Admin" },
    { name: "Emily Davis", email: "emily@example.com", age: 32, role: "Viewer" },
  ];
  const [theme, setTheme] = useState("light");

  const handleSearch = (query) => {
    console.log("Searching for:", query)
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Apply the theme to the document body
    document.body.className = newTheme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  }
  return (
    <div>
      <Header
        title="Data Visualization Dashboard"
        onSearch={handleSearch}
        onToggleTheme={toggleTheme}
        currentTheme={theme}
      />
     
      <div className='flex'>
        {/* Sidebar */}
        <Sidebar />
           {/* Main Content */}
        <div className="flex-1 bg-gray-100">
        <header className="p-4 bg-white shadow">
          <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
        </header>
        <main className='p-4'>
          <DashboardGrid>
            <div className="bg-white shadow rounded-lg p-4">Content 1</div>
            <div className="bg-white shadow rounded-lg p-4">Content 2</div>
            <div className="bg-white shadow rounded-lg p-4">Content 3</div>
          </DashboardGrid>
        </main>
      </div>
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>User Management</h1>
        <DataTable columns={columns} data={data} rowsPerPage={3} />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Settings
        websocketOptions={websocketOptions}
        updateWebSocketOptions={updateWebSocketOptions}
      />
    </div>
      {/*<div className='min-h-screen flex items-center justify-center'>
        <ThemeToggle />
      </div>*/}
      </div>

      {/*<header className='p-4 bg-gray-800 text-white flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <ThemeToggle currentTheme={theme} onToggleTheme={toggleTheme} />
      </header>*/}

   
      
    </div>
  );
};

export default App;