import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const AreaChartPage = () => {
  // Fetch data from Redux store
  const data = useSelector((state) => state.data.data); // Access data from Redux
  const filters = useSelector((state) => state.filters.filters); // Access filters from Redux

  // Filter data
  const filteredData = data.filter((item) => {
    return (
      (!filters.end_year || item.end_year === filters.end_year) &&
      (!filters.topic || item.topic === filters.topic) &&
      (!filters.region || item.region === filters.region) &&
      (!filters.country || item.country === filters.country) &&
      (!filters.pestle || item.pestle === filters.pestle) &&
      (!filters.sector || item.sector === filters.sector)
    );
  });

  // Prepare data for the area chart
  const chartData = {
    labels: filteredData.map((item) => item.topic), // X-axis labels (e.g., topics)
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((item) => item.intensity ?? 0), // Y-axis data
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        fill: true, // Enable area fill
      },
      {
        label: "Relevance",
        data: filteredData.map((item) => item.relevance ?? 0), // Y-axis data
        backgroundColor: "rgba(153, 102, 255, 0.2)", // Area fill color
        borderColor: "rgba(153, 102, 255, 1)", // Line color
        fill: true, // Enable area fill
      },
      {
        label: "Likelihood",
        data: filteredData.map((item) => item.likelihood ?? 0), // Y-axis data
        backgroundColor: "rgba(255, 159, 64, 0.2)", // Area fill color
        borderColor: "rgba(255, 159, 64, 1)", // Line color
        fill: true, // Enable area fill
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Area Chart</h1>
      <div className="bg-white w-full max-w-4xl flex items-start justify-center h-[500px] p-6 rounded-lg shadow-md mt-0">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default AreaChartPage;
