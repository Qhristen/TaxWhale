import React from "react";
import Image from "next/image";

const WalletAssets = () => {
  return (
    <div className="relative overflow-x-auto mt-3 pt-4 sm:rounded-sm">
      <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
        <thead className="text-xs text-gray-700 uppercase bg-white border-t-2 border-gray">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center"></div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[10px] text-[#757372] text-opacity-80 whitespace-nowrap "
            >
              TOKENS
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[10px] text-[#757372] text-opacity-80 whitespace-nowrap "
            >
              HOLDINGS
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[10px] text-[#757372] text-opacity-80 whitespace-nowrap "
            >
              HOLDINGS VALUE
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[10px] text-[#757372] text-opacity-80 whitespace-nowrap "
            >
              CHANGE{" "}
              <span className="font-normal leading-5">(24HR CHANGE)</span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-[10px] text-[#757372] text-opacity-80 whitespace-nowrap "
            >
              MARKET PRICE
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#EDEDED] bg-opacity-[0.6] border-t-2 border-white">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <div className="w-[5px] h-[5px] rounded-full bg-[#757372]"></div>
              </div>
            </td>

            <td className="flex gap-2 items-center px-6 py-4">
          
                <div className="w-[25px] h-[25px]">
                  <Image
                    src={`images/btc.svg`}
                    layout="responsive"
                    width={`20`}
                    height={`20`}
                    alt={`icon`}
                  />
                </div>
                  <span>BITCOIN</span>
            </td>
            <td className="px-6 py-4">0.5676</td>
            <td className="px-6 py-4">0.5676</td>
            <td className="px-6 py-4 text-red-500">-4.95</td>
            <td className="px-6 py-4 whitespace-nowrap">$19,470.37 USD</td>
          </tr>
          <tr className="bg-[#EDEDED] bg-opacity-[0.6] border-t-2 border-white">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <div className="w-[5px] h-[5px] rounded-full bg-[#757372]"></div>
              </div>
            </td>

            <td className="flex gap-2 items-center px-6 py-4">
          
                <div className="w-[25px] h-[25px]">
                  <Image
                    src={`images/ETH.svg`}
                    layout="responsive"
                    width={`20`}
                    height={`20`}
                    alt={`icon`}
                  />
                </div>
                  <span>ETHEREUM</span>
            </td>
            <td className="px-6 py-4">0.5676</td>
            <td className="px-6 py-4">0.5676</td>
            <td className="px-6 py-4 text-red-500">-4.95</td>
            <td className="px-6 py-4 whitespace-nowrap">$19,470.37 USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WalletAssets;
