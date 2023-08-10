import React from "react";
import Button from "@/components/atoms/button";
import DashboardCards from "@/components/molecules/dashboardCards";
import WalletAssets from "@/components/molecules/walletAssets";
import { MdKeyboardArrowRight } from "react-icons/md";
import BreadCrum from "@/components/atoms/breadCrum";

const Wallet = () => {
  return (
    <div>
      <BreadCrum page="Wallet" />
      <br />
      <DashboardCards />
      <div className="bg-white rounded rounded-md p-4 mt-3">
        <div className="flex justify-between items-center">
          <h1 className="text-[13px] text-[#757372]  text-opacity-80 font-bold ">
            WALLET ASSETS/HOLDINGS
          </h1>
          <Button icon={`images/ic_round-refresh.svg`}>Refresh</Button>
        </div>
        <WalletAssets />
      </div>
    </div>
  );
};

export default Wallet;
