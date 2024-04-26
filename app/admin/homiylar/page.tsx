"use client";
import axiosInstance from "@/app/api/axiosInstance";
import Pagination from "@/app/components/pagination";
import SponsorTable from "@/app/components/sponsor-table";
import { stateProps } from "@/app/store/config-store";
import {
  GetSponsorsResponse,
  getSponsors,
} from "@/app/store/homiylar/sponsorsSlice";
import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getSponsors(""));
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("tk-access");
    axiosInstance
      .get("/sponsor-list/", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data) {
        } else {
        }
        setLoading(false);
      })
      .catch((err) => {});
  }, [loading]);

  return (
    <div className="bg-[#f5f5f7] pt-[48px] pb-[84px] w-full h-full">
      <div className="container">
        <SponsorTable />
        <Pagination />
      </div>
    </div>
  );
};

export default page;
