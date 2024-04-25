"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SwitcherProps {
  children: React.ReactNode;
  to: string;
}
const SwitcherTab: React.FC<SwitcherProps> = ({ children, to }) => {
  const location = usePathname();

  return (
    <Link
      href={to}
      className={
        "w-[193px] text-center  text-[#3366FF99] py-[14px] text-[12px] font-medium  " +
        (location.split("/").at(-1) === to ? "bg-[#3366FF] text-white" : "")
      }
    >
      {children}
    </Link>
  );
};

export default SwitcherTab;
