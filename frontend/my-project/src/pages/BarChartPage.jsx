import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

// Register Chart.js components for Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartPage = () => {
  // Fetch data and filters from Redux store
  const data = useSelector((state) => state.data.data); // Access data from Redux

  console.log("full data", data);
  const filters = useSelector((state) => state.filters.filters); // Access filters from Redux

  // Filter data based on selected filters
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData);

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

  // Prepare data for the bar chart
  const chartData = {
    labels: filteredData.map((item) => item.topic), // X-axis labels
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((item) => item.intensity*50 ?? 10), // Y-axis data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Relevance",
        data: filteredData.map((item) => item.relevance*80 ?? 10),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Likelihood",
        data: filteredData.map((item) => item.likelihood*40 ?? 0),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bar Chart</h1>
      {/* Render the Bar Chart */}
      <div className="bg-white w-11/12 flex items-start justify-center h-[500px] p-6 rounded-lg shadow-md mt-0">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default BarChartPage;
