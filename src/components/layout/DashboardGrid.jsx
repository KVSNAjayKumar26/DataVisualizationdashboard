import React from 'react'

const DashboardGrid = ({ children, columns = 3, gap = 4}) => {
    // Dynamically set grid columns and gap using Tailwind CSS classes
    const gridTemplate = `grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-${columns} gap-${gap}`;

  return (
    <div className={`${gridTemplate} p-4`}>
    {children}
    </div>
  );
};

export default DashboardGrid;