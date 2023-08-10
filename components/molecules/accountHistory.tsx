import React from "react";
import Image from "next/image";

const AccountHistory = () => {
  return (
    <div className="rounded rounded-md bg-white p-4 mb-3">
      <div className="flex justify-between">
        <h1 className="text-[13px] font-bold text-[#757372] text-opacity-80">
          Account Import History
        </h1>
        <h5 className="text-[10px] ">View All</h5>
      </div>

      <div className="flex justify-between pl-2 pb-3 pt-3">
        <h1 className="text-[10px] font-bold text-[#757372] text-opacity-80">
          3 Wallet
        </h1>
        <h5 className="flex gap-2 text-[10px] font-bold leading text-[#3844F1]">
          <div className="w-[12px] h-[12px]">
            <Image
              src={`images/plus.svg`}
              layout="responsive"
              width={`12`}
              height={`12`}
              alt={`icon`}
            />
          </div>
          Add Wallet
        </h5>
      </div>
      <div className="flex justify-between pl-2 pb-3 pt-3">
        <h1 className="text-[10px] font-bold text-[#757372] text-opacity-80">
          2 Exchange
        </h1>
        <h5 className="flex gap-2 text-[10px] font-bold leading text-[#3844F1]">
        <div className="w-[12px] h-[12px]">
            <Image
              src={`images/plus.svg`}
              layout="responsive"
              width={`12`}
              height={`12`}
              alt={`icon`}
            />
          </div>
          Add Exchange
        </h5>
      </div>
      <div className="flex justify-between pl-2 pb-3 pt-3">
        <h1 className="text-[10px] font-bold text-[#757372] text-opacity-80">
          3 Exchange
        </h1>
        <h5 className="flex gap-2 text-[10px] font-bold leading text-[#3844F1]">
        <div className="w-[12px] h-[12px]">
            <Image
              src={`images/plus.svg`}
              layout="responsive"
              width={`12`}
              height={`12`}
              alt={`icon`}
            />
          </div>
          Add CSV
        </h5>
      </div>
      <div className="flex justify-between pl-2 pb-3 pt-3">
        <h1 className="text-[10px] font-bold text-[#757372] text-opacity-80">
          1 Exchange
        </h1>
        <h5 className="flex gap-2 text-[10px] font-bold leading text-[#3844F1]">
        <div className="w-[12px] h-[12px]">
            <Image
              src={`images/plus.svg`}
              layout="responsive"
              width={`12`}
              height={`12`}
              alt={`icon`}
            />
          </div>
          Add Transaction
        </h5>
      </div>
    </div>
  );
};

export default AccountHistory;
