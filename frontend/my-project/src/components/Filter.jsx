import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../slices/filterSlice"; // Import Redux actions

function Filter() {
  const dispatch = useDispatch();

  // Access filter state from Redux
  const filters = useSelector((state) => state.filters.filters);
  console.log("instarting", filters);

  // Example dropdown options (replace with your actual data)
  const endYearOptions = ["2017", "2018", "2019", "2020", "2021", "2022", "2016"];
  const topicsOptions = ["oil", "gas", "consumption", "gdp", "export"];
  const regionOptions = ["Northern America", "Europe", "Asia", "Africa"];
  const countryOptions = [
    "United States of America",
    "Canada",
    "Germany",
    "India",
    "Australia",
    "South Africa"
  ];
  const pestleOptions = ["Industries", "Environmental", "Economic", "Political"];
  const sectorOptions = ["Energy", "Manufacturing", "Transport", "Agriculture", "Aerospace & defence", "Support services"];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(setFilters({ ...filters, [name]: value })); // Update filters in Redux
    console.log("after dispatch " ,filters);
  };

  // Handle reset filters
  const handleResetFilters = (e) => {
    e.preventDefault(); // Prevent form submission
    dispatch(resetFilters()); // Reset filters in Redux
  };

  // Handle apply filters
  const handleApplyFilters = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Filters applied:", filters);
    // Add your filter application logic here (if needed)
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
      <form onSubmit={handleApplyFilters} onReset={handleResetFilters}>
        <div className="flex items-center gap-4">
          {/* End Year */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Year
            </label>
            <select
              name="end_year"
              value={filters.end_year}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select End Year</option>
              {endYearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Topics */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topics
            </label>
            <select
              name="topic"
              value={filters.topic}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Topic</option>
              {topicsOptions.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Region
            </label>
            <select
              name="region"
              value={filters.region}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Region</option>
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Country</option>
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* PESTLE */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PESTLE
            </label>
            <select
              name="pestle"
              value={filters.pestle}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select PESTLE</option>
              {pestleOptions.map((pestle) => (
                <option key={pestle} value={pestle}>
                  {pestle}
                </option>
              ))}
            </select>
          </div>

          {/* Sector */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sector
            </label>
            <select
              name="sector"
              value={filters.sector}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Sector</option>
              {sectorOptions.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>

          {/* Reset and Apply Buttons */}
          <div className="flex items-end gap-2">
            <button
              type="reset"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;