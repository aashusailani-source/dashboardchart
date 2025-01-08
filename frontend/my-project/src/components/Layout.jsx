import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Filter from "./Filter";

function Layout() {
  const location = useLocation();
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      {location.pathname !== "/" && <Filter />}
      {/* Page content below the Navbar */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;