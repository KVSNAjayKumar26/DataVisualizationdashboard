import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options }) => {
  // Default options if none are provided
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Pie Chart Example",
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options || defaultOptions} />
    </div>
  );
};

export default PieChart;
