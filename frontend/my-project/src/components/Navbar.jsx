import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 rounded-b-xl p-4 shadow-lg">
      <div className="container mx-auto mb-0 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-white text-2xl font-bold">
          DataVisualizer
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/area-chart"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Area Chart
          </Link>
          <Link
            to="/bar-chart"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Bar Chart
          </Link>
          <Link
            to="/line-chart"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Line Chart
          </Link>
          <Link
            to="/pie-chart"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Pie Chart
          </Link>
          <Link
            to="/radar-chart"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Radar Chart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;