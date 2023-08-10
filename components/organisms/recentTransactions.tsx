// "use client";

import React from "react";
import Image from "next/image";
import TransactionCard from "../molecules/transactionCard";

const RecentTransactions = () => {
  return (
    <div className="rounded rounded-md bg-white p-4">
      <div className="flex justify-between">
        <h1 className="text-[13px] font-bold text-[#757372] text-opacity-80">
          Recent Transactions
        </h1>
        <h5 className="text-[10px] ">View All</h5>
      </div>
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </div>
  );
};

export default RecentTransactions;
