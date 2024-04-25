import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container">
        <div className="flex justify-between items-center gap-3 py-3">
          <Link href={"#"} className="">
            <Image
              src="/logo.png"
              width={173}
              height={24}
              alt="logo"
              priority
            />
          </Link>
          <div className="flex justify-between items-center gap-2 w-[205px]">
            <Link
              href={"#"}
              className="p-1 pl-4 sm:pl-5  flex justify-between items-center w-[133px] bg-[#F1F1F3] rounded-md"
            >
              <div className="text-[11px] sm:text-[13px] font-bold  ">Shohrux</div>
              <Image
                src="/person.svg"
                width={32}
                height={32}
                alt="person"
                priority
              />
            </Link>

            <Link href={"#"}>
              <Image
                src="/log-out.svg"
                width={32}
                height={32}
                alt="logout"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
