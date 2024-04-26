"use client";
import React, { useState } from "react";
import SwitcherTab from "./switcher-tab";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  getSponsors,
  setFilter,
  setPagination,
} from "../store/homiylar/sponsorsSlice";
import { stateProps } from "../store/config-store";

interface formDataProps {
  search: string;
  filter: string;
}
const SubHeader = () => {
  const dispatch: Dispatch<any> = useDispatch();
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
            <select
              className="flex justify-center items-center p-[4px] gap-[10px] bg-[#EDF1FD] bg-[url(/filter.svg)] bg-no-repeat   rounded-md text-[#3365FC]  font-medium text-[14px] pl-[30px]"
              style={{
                backgroundPosition: "12px 50%",
              }}
              onChange={(e) => {
                dispatch(setFilter(e.target.value));
                dispatch(getSponsors(""));
              }}
            >
              <option value="">Filter</option>
              <option value="id">Id</option>
              <option value="full_name">I.F.SH</option>
              <option value="phone">Telefon</option>
              <option value="sum">Homiylik</option>
              <option value="spent">Sarf</option>
              <option value="created_at">Sana</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
