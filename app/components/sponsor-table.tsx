import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { stateProps } from "../store/config-store";
import dayjs from "dayjs";
import Link from "next/link";
interface TableProps {}
const SponsorTable: React.FC<TableProps> = () => {
  const sponsors = useSelector((state: stateProps) => state.sponsors.sponsors);

  return (
    <div
      className=" block p-[10px]   overflow-x-auto "
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#aaa transparent",
      }}
    >
      <table className="w-full min-w-[1090px] ">
        <thead className="text-[12px] text-[#B1B1B8] uppercase w-full border-b-[12px] border-[transparent]  ">
          <tr>
            <th>#</th>
            <th>f.i.sh.</th>
            <th>Tel.Raqami</th>
            <th>Homiylik summasi</th>
            <th>Sarflangan summa</th>
            <th>Sana</th>
            <th>Holati</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {sponsors.map((s) => (
            <tr
              key={s.id}
              className="bg-[#FFFFFF] mb-[12px]  text-[14px] text-center border-b-[12px] border-[#f5f5f7] "
            >
              <td className="pl-[10px] py-[23px] block">{s.id}</td>
              <td>{s.full_name}</td>
              <td>{s.phone}</td>
              <td>
                {s.sum} <span className="text-[#B2B7C1]">UZS</span>
              </td>
              <td>
                {s.spent} <span className="text-[#B2B7C1]">UZS</span>
              </td>
              <td>{dayjs(s.created_at).format("YYYY.MM.DD")}</td>
              <td
                className={
                  "yangi" === s.get_status_display.toLowerCase()
                    ? "text-[#5BABF2]"
                    : "moderatsiyada" === s.get_status_display.toLowerCase()
                    ? "text-[#FFA445]"
                    : "text-[#979797] "
                }
              >
                {s.get_status_display}
              </td>
              <td className="pr-[14px]">
                <Link href={"/sponsors/" + s.id}>
                  <Image alt="filter" src="/eye.svg" width={24} height={24} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SponsorTable;
