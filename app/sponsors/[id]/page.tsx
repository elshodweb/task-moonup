"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/app/api/axiosInstance";

interface SingleSponsorProps {
  params: {
    id: string;
  };
}
interface SponsorProp {
  comment: string;
  created_at: string;
  firm: string;
  full_name: string;
  get_status_display: string;
  id: number;
  is_legal: false;
  phone: string;
  sum: number;
}
const SingleSponsor: React.FC<SingleSponsorProps> = ({ params }) => {
  const { id } = params;
  const [sponsorData, setSponsorData] = useState<SponsorProp>({
    comment: "",
    created_at: "",
    firm: "",
    full_name: "",
    get_status_display: "",
    id: 0,
    is_legal: false,
    phone: "",
    sum: 0,
  });
  useEffect(() => {
    axiosInstance
      .get("/sponsor-detail/" + id)
      .then((res) => {
        setSponsorData(res.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="bg-[#f5f5f7] min-h-screen ">
      <div className="bg-[#fbfbfb] ">
        <div className="container">
          <div className="flex  py-6 items-center gap-3 flex-wrap ">
            <Link
              className="flex items-center text-[24px] gap-[16px]  "
              href={"/admin/homiylar"}
            >
              <Image
                alt="filter"
                src="/arrow-left.svg"
                width={28}
                height={28}
              />
              <span>{sponsorData.full_name}</span>
            </Link>

            <div className="bg-[#DDFFF2] text-[#00CF83] px-[12px] py-[6px] rounded-[4px] ">
              {sponsorData.get_status_display}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] p-[32px] mb-[90px] bg-[#fff] max-w-[793px] mx-auto rounded-md">
        <div className=" flex justify-between items-center">
          <div className="text-[24px] max-[450px]:text-[15px] ">
            Homiy haqida
          </div>
          <button className=" max-[450px]:gap-[5px]  max-[450px]:px-4 bg-[#EDF1FD] text-[#3365FC] flex gap-[10px] items-center justify-center py-2 px-7 rounded-md text-[14px] ">
            <Image alt="filter" src="/edit.svg" width={24} height={24} />
            <span>Tahrirlash</span>
          </button>
        </div>
        <div className="flex justify-start items-center gap-5 mt-[32px]">
          <Image alt="filter" src="/homiy.png" width={64} height={64} />
          <span className="text-[16px] ">{sponsorData.full_name}</span>
        </div>
        <div className="flex mt-[24px] max-w-[400px] w-full justify-between max-[450px]:flex-col max-[450px]:gap-5">
          <div>
            <div className="text-[#B5B5C3] text-[12px] uppercase mb-3 ">
              telefon raqam
            </div>
            <div className="text-[16px] uppercase font-medium  ">
              {sponsorData.phone}
            </div>
          </div>
          <div>
            <div className="text-[#B5B5C3] text-[12px] uppercase mb-3 ">
              Homiylik summasi
            </div>
            <div className="text-[16px] uppercase font-medium  ">
              {sponsorData.sum}
            </div>
          </div>
        </div>
      </div>
      <Image
        className="mx-auto"
        alt="filter"
        src="/bg.png"
        width={820}
        height={614}
      />
    </div>
  );
};

export default SingleSponsor;
