import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

const ProfielDropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-white p-3 rounded rounded-md drop-shadow" asChild>
        <button
          className="flex justify-center items-center gap-2  font-bold leading outline-none"
          aria-label="Customise options"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.5788"
              cy="7.27803"
              r="4.77803"
              stroke="#1320DF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.00002 18.7016C3.99873 18.3657 4.07385 18.0339 4.2197 17.7313C4.67736 16.816 5.96798 16.3308 7.03892 16.1112C7.81128 15.9463 8.59431 15.8362 9.38217 15.7816C10.8408 15.6535 12.3079 15.6535 13.7666 15.7816C14.5544 15.8369 15.3374 15.947 16.1099 16.1112C17.1808 16.3308 18.4714 16.7702 18.9291 17.7313C19.2224 18.3481 19.2224 19.0642 18.9291 19.681C18.4714 20.6421 17.1808 21.0814 16.1099 21.2919C15.3384 21.4636 14.5551 21.5768 13.7666 21.6306C12.5794 21.7313 11.3866 21.7496 10.1968 21.6855C9.92221 21.6855 9.65677 21.6855 9.38217 21.6306C8.59663 21.5775 7.81632 21.4642 7.04807 21.2919C5.96798 21.0814 4.68652 20.6421 4.2197 19.681C4.0746 19.3749 3.99955 19.0403 4.00002 18.7016Z"
              stroke="#1320DF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[14px] whitespace-nowrap">Profile Name</span>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z"
              fill="#1320DF"
            />
          </svg>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white p-5 rounded rounded-md drop-shadow-md" sideOffset={5}>
          <DropdownMenu.Item className="outline-none pb-3 font-bold leading text-[#757372] hover:text-[#3641EB] cursor-pointer">
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none pb-3 font-bold leading text-[#757372] hover:text-[#3641EB] cursor-pointer">
            Billing
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none pb-3 font-bold leading text-[#757372] hover:text-[#3641EB] cursor-pointer" disabled>
            Request Tax Pro
          </DropdownMenu.Item>

          <DropdownMenu.Item className="outline-none pb-3 font-bold leading text-[#757372] hover:text-[#3641EB] cursor-pointer" disabled>
            Invite Tax Pro{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none pb-3 font-bold leading text-[#757372] hover:text-[#3641EB] cursor-pointer" disabled>
            Sign Tax Report
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ProfielDropdownMenu;
