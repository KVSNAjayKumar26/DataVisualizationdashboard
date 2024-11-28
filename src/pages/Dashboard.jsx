import React from 'react'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import DashboardGrid from '../components/layout/DashboardGrid';
import Card from '../components/Card';

const Dashboard = () => {
    const chartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Sales",
                data: [300, 500, 400, 700, 600],
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Expenses",
                data: [200, 400, 300, 500, 400],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Monthly Sales and Expenses",
            },
        },
    };

    const chartData2 = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Temperature (°C)",
                data: [5, 10, 15, 20, 25],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4, // Smooth curves
                fill: true,  // Area under the curve
            },
            {
                label: "Rainfall (mm)",
                data: [20, 25, 30, 35, 40],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const chartOptions1 = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Weather Data Over Months",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Months",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Values",
                },
                beginAtZero: true,
            },
        },
    };

    const chartData3 = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions2 = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Vote Distribution",
            },
        },
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardGrid columns={3} gap={6}>
                {/* Example Cards */}
                <Card title="Total Sales" value="$25,000" />
                <Card title="New Users" value="1200" />
                <Card title="Active Subscriptions" value="890" />
                {/*Example Charts */}
                <div className='col-span-2'>
                    <BarChart data={chartData} options={chartOptions} />
                </div>
                <div className='col-span-1'>
                    <LineChart data={chartData2} options={chartOptions1} />
                </div>
            </DashboardGrid>
            <PieChart data={chartData3} options={chartOptions2} />
        </div>
    );
};

export default Dashboard;