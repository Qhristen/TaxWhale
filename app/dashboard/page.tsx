import BreadCrum from "@/components/atoms/breadCrum";
import DashboardCards from "@/components/molecules/dashboardCards";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <BreadCrum page="Overview" />

      <br />
      <DashboardCards />
    </div>
  );
};

export default Dashboard;
