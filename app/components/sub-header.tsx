"use client";
import React, { useState } from "react";
import SwitcherTab from "./switcher-tab";
import Image from "next/image";

interface formDataProps {
  search: string;
  filter: string;
}
const SubHeader = () => {
  const [sort, setSort] = useState<formDataProps>({
    search: "",
    filter: "",
  });
  return (
    <div className="bg-[#fbfbfb] ">
      <div className="container">
        <div className="flex justify-between py-6 items-center md:gap-3 md:flex-row flex-col gap-4  ">
          <div className="w-full max-w-[579px] flex justify-center  items-center rounded-md border-[#DCE3FB] border-[3px] overflow-hidden">
            <SwitcherTab to={"dashboard"}>Dashboard</SwitcherTab>
            <SwitcherTab to={"homiylar"}>Homiylar</SwitcherTab>
            <SwitcherTab to={"talabalar"}>Talabalar</SwitcherTab>
          </div>
          <div className="flex justify-center gap-5 w-full max-w-[427px]">
            <input
              className="w-full bg-[#E8E8E8] bg-[url(/search.svg)] bg-no-repeat  p-[10px] pl-[38px] rounded-md text-[15px] "
              style={{
                backgroundPosition: "10px 50%",
              }}
              placeholder="Izlash"
              value={sort.search}
              onChange={(e) => {
                setSort({ ...sort, search: e.target.value });
              }}
            />
            <button className="flex justify-center items-center p-[12px] gap-[10px] bg-[#EDF1FD] w-[123px] rounded-md text-[#3365FC]  font-medium text-[14px] ">
              <Image alt="filter" src="/filter.svg" width={16} height={16} />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
