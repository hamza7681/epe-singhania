import React from "react";
import Sidebar from "../components/Header";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
};

export default DashboardPage;
