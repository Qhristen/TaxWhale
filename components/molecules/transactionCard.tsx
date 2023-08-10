import React from 'react';
import Image from "next/image";

const TransactionCard = () => {
    return (
        
      <div className="flex justify-between align-center pl-2 pb-3 pt-3">
      <div className="flex gap-3">
        <div className="w-[24px] h-[24px]">
          <Image
            src={`/images/bi_arrow-left-square-fill.svg`}
            width={24}
            height={24}
            alt="ld"
          />
        </div>
        <div className="text-[#757372]">
          <h1 className="text-[10px] text-[#757372] font-bold text-opacity-80">
            Sent
          </h1>
          <span className="text-[8px] text-[#757372] font-normal leading">28 Aug, 2022</span>
        </div>
      </div>
      <div className="align-right text-right">
        <h1 className="text-[10px] text-[#757372] pb-2 font-bold text-opacity-80">
          -0.987463524425 BNB
        </h1>
        <div className="text-[8px] text-[#757372] font-normal leading">
          $200
        </div>
      </div>
    </div>
    );
};

export default TransactionCard;