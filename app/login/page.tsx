"use client";
import Image from "next/image";
import React, { useState } from "react";
import MyInput from "../components/my-input";
import MyButton from "../components/my-button";
interface formDataProps {
  login: string;
  password: string;
}
const page = () => {
  const [formData, setFormData] = useState<formDataProps>({
    password: "",
    login: "",
  });
  return (
    <div className="bg-[#f2f2f2] min-h-screen w-full flex justify-center items-center  ">
      <div className="w-full max-w-[402px] p-4">
        <div className="mb-12 flex justify-center">
          <Image
            src="/logo-login.png"
            width={314}
            height={33}
            alt="logo"
            priority
          />
        </div>
        <div
          className="w-full bg-white p-[32px] border-[#EBEEFC] border rounded-xl"
          style={{ boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.03)" }}
        >
          <h2 className="font-bold mb-11 text-[24px] leading-[28px]">Kirish</h2>
          <MyInput
            onChange={(e) => {
              setFormData({ ...formData, login: e.target.value });
            }}
            value={formData.login}
            label="login"
            placeholder="login"
            className="mb-[22px]"
          />
          <MyInput
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            value={formData.password}
            label="parol"
            placeholder="parol"
            className="mb-[22px]"
          />
          <MyButton>Kirish</MyButton>
        </div>
      </div>
    </div>
  );
};

export default page;
