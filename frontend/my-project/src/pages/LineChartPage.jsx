import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartPage = () => {
  // Fetch data and filters from Redux store
  const data = useSelector((state) => state.data.data); // Access data from Redux

  // console.log("full data", data);
  const filters = useSelector((state) => state.filters.filters); // Access filters from Redux

  // Apply filters to the data 
  // const filteredData = data.filter((item) => {
  //   return (
  //     (!filters.end_year || item.end_year === filters.end_year) &&
  //     (!filters.topics || item.topic === filters.topics) &&
  //     (!filters.region || item.region === filters.region) &&
  //     (!filters.country || item.country === filters.country) &&
  //     (!filters.pestle || item.pestle === filters.pestle) &&
  //     (!filters.sector || item.sector === filters.sector)
  //   );
  // });
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData)

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

  // Prepare data for the line chart
  const chartData = {
    labels: filteredData.map((item) => item.topic), // X-axis labels (years)
    datasets: [
      {
        label: "Intensity",
        data: filteredData.map((item) => item.intensity*100 ?? 10), // Y-axis data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Relevance",
        data: filteredData.map((item) => item.relevance*150 ?? 10),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "Likelihood",
        data: filteredData.map((item) => item.likelihood*110 ?? 0),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
    ],
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Line Chart</h1>
      {/* Render the Line Chart */}
      <div className="bg-white w-11/12 flex items-start justify-center h-[500px] p-6 rounded-lg shadow-md mt-0">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default LineChartPage;