"use client";

import React from "react";
import SidebarLink from "../atoms/sidebarLink";
import Image from "next/image";
import { useState } from "react";



const Sidebar = () => {
  const [collapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className={`bg-white h-100 mr-0 w-[${collapsed ? "3%" : "20%"}] pl-5 pt-6 lg:static`}>
      <h1 className="text-[20px] text-[#1320DF] p-4 font-semibold hidden md:block">TaxWhale</h1>
      <br />

      <div
        onClick={() => setSidebarCollapsed(!collapsed)}
        className={`w-[40px] h-[40px] ${collapsed ? `float-left ml-3 md:mr-5` : `mr-4`} float-right cursor-pointer mb-2 bg-white shadow p-2 rounded-full`}
      >
        <Image
          src={`/images/icon-park-solid_menu-fold-one.svg`}
          width={24}
          height={24}
          alt="ld"
        />
      </div>

      <br />
      <br />

      <SidebarLink
        collapsed={collapsed}
        href="/dashboard"
        label="Dashboard"
        icon={`images/dashboard.svg`}
      />
      <SidebarLink
        collapsed={collapsed}
        href="/report"
        icon={`images/tabler_report.svg`}
        label="Generate Report"
      />
      <SidebarLink
        collapsed={collapsed}
        href="/wallet"
        icon={`images/fluent_wallet-credit-card-24-regular.svg`}
        label="Wallet"
      />
      <SidebarLink
        collapsed={collapsed}
        href="/history"
        icon={`images/mingcute_history-line.svg`}
        label="History"
      />
    </div>
  );
};

export default Sidebar;
