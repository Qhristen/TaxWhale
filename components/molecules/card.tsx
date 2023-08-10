import React from "react";
import Image from "next/image";



interface Props {
    title: string;
    amount: number;
    icon: string
   
  }
const Card = (props: Props) => {
  return (
    <div className="w-[115px] h-[70px] rounded rounded-md bg-white p-3">
      <h1 className="whitespace-nowrap text-[12px] text-[#757372] text-opacity-80">{props.title}</h1>
      <div className="flex justify-between items-center pt-2">
        <h1 className="text-[16px] font-bold">{props.amount}</h1>
        <div className="w-[20x] h-[20x]">
          <Image
            src={`/${props.icon}`}
            layout="responsive"
            width={`11`}
            height={`11`}
            alt={`icon`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
