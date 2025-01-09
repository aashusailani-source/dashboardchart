import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { setData } from "../slices/dataSlice";
function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
        console.log("hello")
        // console.log(response.data);

        const modifiedData = response.data.data.map(item => {
          return Object.fromEntries(
            Object.entries(item).map(([key, value]) => {
              // Check for empty, null, or undefined values
              if (value === "" || value === null || value === undefined) {
                // Insert random value for empty fields based on the key
                if (key === "end_year" || key === "start_year") {
                  // Random year between 1970-2020
                  return [key, 2023];
                }
                if (key === "impact" || key === "relevance" || key === "likelihood" || key === "intensity") {
                  // Random value between 1 and 5
                  return [key, 50];
                }
                if (key === "sector" || key === "region" || key === "country" || key === "pestle" || key === "source") {
                  // Random text for categories
                  return [key, `EIA`];
                }
                if (key === "topic" || key === "title" || key === "insight") {
                  // Random text for topics and titles
                  return [key, `emission`];
                }
                if (key === "url") {
                  // Random URL
                  return [key, `http://www.randomurl${Math.floor(Math.random() * 1000)}.com`];
                }
                if (key === "added" || key === "published") {
                  // Random date within the past 10 years
                  const randomDate = new Date(Date.now() - Math.floor(Math.random() * 315360000000)); // Random date within last 10 years
                  return [key, randomDate.toLocaleString()];
                }
                // Default random string for any other field
                return [key, `random_${Math.floor(Math.random() * 1000)}`];
              }
              // Return original value if it's not empty
              return [key, value];
            })
          );
        });

        console.log(modifiedData)
        dispatch(setData(modifiedData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full bg-gray-100 p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to DataVisualizer
        </h1>
        <p className="text-lg text-gray-600">
          Choose a chart to visualize your data.
        </p>
      </header>

      {/* Cards Section */}
      <div className="flex justify-center gap-6 flex-wrap">
        {/* Area Chart Card */}
        <div className="text-center">
          <Link
            to="/area-chart"
            className="bg-white p-6 rounded-lg shadow-md flex-col hover:shadow-lg transition-shadow duration-300 w-48 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Area Chart</h2>
          <p className="mt-2 text-gray-600">Visualize the Area Chart.</p>
          </Link>
        </div>

        {/* Bar Chart Card */}
        <div className="text-center">
          <Link
            to="/bar-chart"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex-col transition-shadow duration-300 w-48 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Bar Chart</h2>
          <p className="mt-2 text-gray-600">Visualize the Bar Chart.</p>
          </Link>
        </div>

        {/* Line Chart Card */}
        <div className="text-center">
          <Link
            to="/line-chart"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex-col transition-shadow duration-300 w-48 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Line Chart</h2>
          <p className="mt-2 text-gray-600">Visualize the Line Chart.</p>
          </Link>
        </div>

        {/* Pie Chart Card */}
        <div className="text-center">
          <Link
            to="/pie-chart"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex-col transition-shadow duration-300 w-48 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Pie Chart</h2>
          <p className="mt-2 text-gray-600">Visualize the Pie Chart.</p>
          </Link>
        </div>

        {/* Radar Chart Card */}
        <div className="text-center">
          <Link
            to="/radar-chart"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex-col transition-shadow duration-300 w-48 flex items-center justify-center"
          >
            <h2 className="text-xl font-semibold text-gray-800">Radar Chart</h2>
          <p className="mt-2 text-gray-600">Visualize the Radar Chart.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;