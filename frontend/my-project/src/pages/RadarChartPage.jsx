import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChartPage = () => {
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

  // Prepare data for the radar chart
  const chartData = {
    labels: filteredData.map((item) => item.topic), // Variables to compare (e.g., topics)
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((item) => item.intensity*50 ?? 0), // Intensity values
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "Relevance",
        data: filteredData.map((item) => item.relevance*180 ?? 0), // Relevance values
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        pointBackgroundColor: "rgba(153, 102, 255, 1)",
        pointBorderColor: "#fff",
      },
      {
        label: "Likelihood",
        data: filteredData.map((item) => item.likelihood*40 ?? 0), // Likelihood values
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        pointBackgroundColor: "rgba(255, 159, 64, 1)",
        pointBorderColor: "#fff",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Radar Chart</h1>
      <div className="bg-white w-11/12 flex items-start justify-center h-[500px] p-6 rounded-lg shadow-md mt-0">
        <Radar data={chartData} />
      </div>
    </div>
  );
};

export default RadarChartPage;
