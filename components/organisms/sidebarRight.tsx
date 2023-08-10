"use client";

import Button from "../atoms/button";
import RecentTransactions from "./recentTransactions";
import AccountHistory from "../molecules/accountHistory";

const SidebarRight = () => {
  return (
    <div className="md:p-4">
      <div className="flex gap-2 pt-3 whitespace-nowrap ">
        <Button icon={`images/plus.svg`}> Add Account</Button>
        <Button icon={`images/fluent_signature-16-regular.svg`}> Request Tax Pro</Button>
      </div>
      <div className="pt-3">
        <AccountHistory />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default SidebarRight;
