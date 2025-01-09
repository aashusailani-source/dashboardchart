import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

// Register Chart.js components for Pie Chart
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartPage = () => {
  // Fetch data and filters from Redux store
  const data = useSelector((state) => state.data.data); // Access data from Redux
  console.log("full data", data);
  const filters = useSelector((state) => state.filters.filters); // Access filters from Redux

  // Filter data based on selected filters
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const newFilteredData = data.filter(item => {
      return (
        (!filters.end_year || item.end_year === filters.end_year) &&
        (!filters.topic || item.topic === filters.topic) &&
        (!filters.region || item.region === filters.region) &&
        (!filters.country || item.country === filters.country) &&
        (!filters.pestle || item.pestle === filters.pestle) &&
        (!filters.sector || item.sector === filters.sector)
      );
    });
    setFilteredData(newFilteredData);
  }, [filters, data]);

  // Prepare data for the pie chart
  const chartData = {
    labels: filteredData.map((item) => item.topic), // Labels for each slice of the pie
    datasets: [
      {
        label: "Pie Chart",
        data: filteredData.map((item) => item.intensity ?? 10), // Values for each slice
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pie Chart</h1>
      {/* Render the Pie Chart */}
      <div className="bg-white w-11/12 flex items-start justify-center h-[500px] p-6 rounded-lg shadow-md mt-0">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChartPage;
