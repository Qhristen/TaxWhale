import BreadCrum from "@/components/atoms/breadCrum";
import DashboardCards from "@/components/molecules/dashboardCards";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const GenerateReport = () => {
  return (
    <div>
           <BreadCrum page="Report" />

      <br />
      <DashboardCards />{" "}
    </div>
  );
};

export default GenerateReport;
