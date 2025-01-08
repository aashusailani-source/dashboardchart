import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartPage = () => {
  // Fetch data and filters from Redux store
  const data = useSelector((state) => state.data.data); // Access data from Redux
  const filters = useSelector((state) => state.filters.filters); // Access filters from Redux

  // Apply filters to the data
  const filteredData = data.filter((item) => {
    return (
      (!filters.end_year || item.end_year === filters.end_year) &&
      (!filters.topics || item.topic === filters.topics) &&
      (!filters.region || item.region === filters.region) &&
      (!filters.country || item.country === filters.country) &&
      (!filters.pestle || item.pestle === filters.pestle) &&
      (!filters.sector || item.sector === filters.sector)
    );
  });

  // Prepare data for the line chart
  const chartData = {
    labels: filteredData.map((item) => item.year), // X-axis labels (years)
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((item) => item.intensity), // Y-axis data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Relevance",
        data: filteredData.map((item) => item.relevance),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "Likelihood",
        data: filteredData.map((item) => item.likelihood),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart Visualization",
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Line Chart</h1>
      {/* Render the Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LineChartPage;