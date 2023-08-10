import React from "react";
import Image from "next/image";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: string;
}

const Button = (props: Props) => {
  const { children, icon, ...rest } = props;
  return (
    <button className="flex gap-2 justify-center items-center p-2 pl-3 pr-3 bg-[#1320DF] bg-opacity-[0.04] rounded rounded-md text-[#1320DF] text-[12px] font-normal text-sm shadow hover:text-white hover:bg-[#1320DF]" {...rest}>
      <span className="whitespace-nowrap">{children}</span>
      <div className="w-[14.67px] h-[14.67px]">

      <Image
              src={`/${icon}`}
              layout="responsive"
              width={`24`}
              height={`24`}
              alt={`icon`}
              />
              </div>
    </button>
  );
};

export default Button;
