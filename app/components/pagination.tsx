import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../store/config-store";
import { Dispatch } from "@reduxjs/toolkit";
import { getSponsors, setPagination } from "../store/homiylar/sponsorsSlice";
import Image from "next/image";

const Pagination = () => {
  const pagination = useSelector(
    (state: stateProps) => state.sponsors.pagination
  );
  const { currentPage, totalItems, pageSize, totalPages } = pagination;
  const dispatch: Dispatch<any> = useDispatch();
  const changeCurrentPage = (n: number) => {
    dispatch(
      setPagination({
        ...pagination,
        currentPage: n,
      })
    );
    dispatch(getSponsors(""));
  };
  const calc = pageSize * (currentPage - 1);

  return (
    <div className="flex justify-between items-center mt-7">
      <div className="text-[15px] ">
        {totalItems} tadan {1 + calc}-{pageSize + calc} ko‘rsatilmoqda
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-[12px] text-[15px]">
          <label htmlFor="select-size">Ko‘rsatish</label>
          <select
            onChange={(e) => {
              dispatch(
                setPagination({
                  ...pagination,
                  pageSize: +e.target.value,
                  currentPage: 1,
                })
              );
              dispatch(getSponsors(""));
            }}
            value={pageSize}
            className="p-[6px]  border rounded-[4px] block  "
            id="select-size"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex justify-center items-center  text-[15px]">
          <button
            className={
              "bg-[#FFFFFF] block p-1 m-1 rounded-[4px] border " +
              (currentPage === 1 ? " bg-[#DFE3E8]" : "")
            }
            onClick={() => {
              if (currentPage > 1) {
                changeCurrentPage(currentPage - 1);
              }
            }}
          >
            <Image alt="arrow to left" src="/left.svg" width={24} height={24} />
          </button>
          <button
            className={
              "bg-[#f3f8ff] block p-1 m-1 rounded-[4px] border border-[#acc5ff] text-[#3b5799] w-8 h-8 "
            }
          >
            {currentPage}
          </button>
          /
          <button
            className={
              "bg-[#d5d8dd] block p-1 m-1 rounded-[4px] border border-[#8ca0d0] text-[#2e4579] w-8 h-8 "
            }
          >
            {totalPages}
          </button>
          <button
            className={
              "bg-[#ffffff] block p-1 m-1 rounded-[4px] border " +
              (currentPage === totalPages ? "bg-[#DFE3E8]" : "")
            }
            onClick={() => {

              if (currentPage < totalPages) {
                changeCurrentPage(currentPage + 1);
              }
            }}
          >
            <Image
              alt="arrow to left"
              src="/right.svg"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
