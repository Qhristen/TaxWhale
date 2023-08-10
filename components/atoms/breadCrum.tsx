import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  page: string;
}

const BreadCrum = ({ page }: Props) => {
  return (
    <div>
      <h2 className="flex items-center text-[10px] text-[#757372] text-opacity-80 pb-2 pt-3 leading-3 ">
        Dashboard <MdKeyboardArrowRight /> {page}
      </h2>
    </div>
  );
};

export default BreadCrum;
