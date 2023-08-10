"use client";
import React from "react";
import Search from "./search";
import { FiSearch } from "react-icons/fi";
import Button from "../atoms/button";
import ProfielDropdownMenu from "./profileDropdown";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = usePathname()
  console.log(router, "rote")
  return (
    <div className="container mx-auto pb-5 pt-5 pr-5">
    <div className="flex justify-center justify-between items-center pb-4 gap-8">
      <h1 className="text-[20px] m-0 text-[#1320DF] font-semibold hidden md:block">
        {/* {router.pathname.toLowerCase()} */}
        Dashboard
      </h1>
      <div className="hidden md:block">

      <Search />
      </div>
      <div className="hidden md:block">

      <Button icon={`images/tabler_report.svg`}>Generate Tax Report</Button>
      </div>

      <div className="flex justify-center items-center p-4 bg-white w-[40px] h-[40px] rounded rounded-full drop-shadow">
        <span className="relative inline-block">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H11.025C11.3083 12 11.5417 11.904 11.725 11.712C11.9083 11.5207 12 11.2833 12 11C12 10.7167 11.9043 10.479 11.713 10.287C11.521 10.0957 11.2833 10 11 10H4.975C4.69167 10 4.45833 10.0957 4.275 10.287C4.09167 10.479 4 10.7167 4 11C4 11.2833 4.09567 11.5207 4.287 11.712C4.479 11.904 4.71667 12 5 12ZM5 9H15.025C15.3083 9 15.5417 8.904 15.725 8.712C15.9083 8.52067 16 8.28333 16 8C16 7.71667 15.904 7.479 15.712 7.287C15.5207 7.09567 15.2833 7 15 7H4.975C4.69167 7 4.45833 7.09567 4.275 7.287C4.09167 7.479 4 7.71667 4 8C4 8.28333 4.09567 8.52067 4.287 8.712C4.479 8.904 4.71667 9 5 9ZM5 6H15.025C15.3083 6 15.5417 5.90433 15.725 5.713C15.9083 5.521 16 5.28333 16 5C16 4.71667 15.904 4.479 15.712 4.287C15.5207 4.09567 15.2833 4 15 4H4.975C4.69167 4 4.45833 4.09567 4.275 4.287C4.09167 4.479 4 4.71667 4 5C4 5.28333 4.09567 5.521 4.287 5.713C4.479 5.90433 4.71667 6 5 6ZM0 17.575V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H18C18.55 0 19.021 0.195667 19.413 0.587C19.8043 0.979 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H4L1.7 18.3C1.38333 18.6167 1.02067 18.6873 0.612 18.512C0.204 18.3373 0 18.025 0 17.575ZM2 15.175L3.175 14H18V2H2V15.175ZM2 2V15.175V2Z"
              fill="#1320DF"
            />
          </svg>

          <span className="absolute top-0 right-0 inline-flex  w-[20px] h-[20px] items-center justify-center py-1 text-xs leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            12
          </span>
        </span>
      </div>

      <div className="flex justify-center items-center p-4 bg-white w-[40px] h-[40px] rounded rounded-full drop-shadow">
        <span className="relative inline-block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1508_21231)">
              <path
                d="M21.6732 18.5536C21.0303 17.9805 20.4675 17.3235 19.9999 16.6003C19.4894 15.602 19.1834 14.5117 19.0999 13.3936V10.1003C19.1043 8.344 18.4672 6.64658 17.3084 5.32691C16.1495 4.00724 14.5486 3.15617 12.8065 2.93359V2.07359C12.8065 1.83755 12.7128 1.61118 12.5459 1.44427C12.379 1.27736 12.1526 1.18359 11.9165 1.18359C11.6805 1.18359 11.4541 1.27736 11.2872 1.44427C11.1203 1.61118 11.0265 1.83755 11.0265 2.07359V2.94693C9.30004 3.18555 7.71852 4.04176 6.57489 5.357C5.43126 6.67223 4.80302 8.35736 4.80654 10.1003V13.3936C4.72304 14.5117 4.41705 15.602 3.90654 16.6003C3.44712 17.3218 2.89333 17.9788 2.25987 18.5536C2.18876 18.6161 2.13176 18.693 2.09268 18.7792C2.0536 18.8654 2.03332 18.9589 2.0332 19.0536V19.9603C2.0332 20.1371 2.10344 20.3066 2.22847 20.4317C2.35349 20.5567 2.52306 20.6269 2.69987 20.6269H21.2332C21.41 20.6269 21.5796 20.5567 21.7046 20.4317C21.8296 20.3066 21.8999 20.1371 21.8999 19.9603V19.0536C21.8997 18.9589 21.8795 18.8654 21.8404 18.7792C21.8013 18.693 21.7443 18.6161 21.6732 18.5536ZM3.41987 19.2936C4.04014 18.6944 4.58627 18.0229 5.04654 17.2936C5.68961 16.0879 6.06482 14.7576 6.14654 13.3936V10.1003C6.1201 9.31895 6.25115 8.54031 6.5319 7.81071C6.81265 7.0811 7.23734 6.41545 7.7807 5.85339C8.32406 5.29134 8.97496 4.84437 9.69466 4.53911C10.4143 4.23385 11.1881 4.07653 11.9699 4.07653C12.7516 4.07653 13.5254 4.23385 14.2451 4.53911C14.9648 4.84437 15.6157 5.29134 16.159 5.85339C16.7024 6.41545 17.1271 7.0811 17.4078 7.81071C17.6886 8.54031 17.8196 9.31895 17.7932 10.1003V13.3936C17.8749 14.7576 18.2501 16.0879 18.8932 17.2936C19.3535 18.0229 19.8996 18.6944 20.5199 19.2936H3.41987Z"
                fill="#1320DF"
              />
              <path
                d="M11.9996 22.854C12.4195 22.8443 12.8225 22.6864 13.1373 22.4083C13.4521 22.1301 13.6583 21.7496 13.7196 21.334H10.2129C10.2759 21.7609 10.4918 22.1503 10.8204 22.4299C11.1491 22.7095 11.5681 22.8602 11.9996 22.854Z"
                fill="#1320DF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1508_21231">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="absolute top-0 right-0 inline-flex w-[20px] h-[20px] items-center justify-center py-1 text-xs  leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded rounded-full">
            33
          </span>
        </span>
      </div>
      <ProfielDropdownMenu />
    </div>
    </div>
  );
};

export default Header;
