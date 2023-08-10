import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkProps {
  href: string;
  label?: string;
  icon?: string;
  collapsed?: boolean;
}

const SidebarLink = (props: LinkProps) => {
  const { href, label, icon, collapsed } = props;
  return (
    <Link href={href}>
      <div className="p-4 hover:bg-[#EDEDED]">
        <div className={` ${collapsed ? `gap-0` : `flex w-auto gap-3`}  `}>
          <div className="w-[24px] h-[24px]">
            <Image
              src={`/${icon}`}
              layout="responsive"
              width={`24`}
              height={`24`}
              alt={`${label}`}
            />
          </div>

          {collapsed ? (
            " "
          ) : (
            <span className="leading font-semibold text-[#3A3735] text-opacity-60 text-[14px] hover:text-black">
              {label}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SidebarLink;
