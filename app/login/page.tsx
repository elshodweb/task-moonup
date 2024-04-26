"use client";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import MyInput from "../components/my-input";
import MyButton from "../components/my-button";
import axiosInstance from "../api/axiosInstance";
import { useRouter } from "next/navigation";
import ErrorModal from "../components/modal";
interface formDataProps {
  username: string;
  password: string;
}
const page = () => {
  const navigate = useRouter();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<formDataProps>({
    username: "",
    password: "",
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axiosInstance
      .post("/auth/login/", {
        username: formData?.username,
        password: formData?.password,
      })
      .then((response) => {
        if (response?.data?.access && response?.data?.refresh) {
          localStorage.setItem("tk-access", response.data.access);
          localStorage.setItem("tk-refresh", response.data.refresh);
        }
        navigate.push("/admin/dashboard");
      })
      .catch((error) => {
        if(error){
          setError("Kirishda xatolig ketti! Login yokiy parol xato. Iltimos, kiritilgan ma'lumotlarni tekshiring.");
        }
      });
  };

  const closeErrorModal = () => {
    setError("");
  };

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
        <form
          onSubmit={submit}
          className="w-full bg-white p-[32px] border-[#EBEEFC] border rounded-xl"
          style={{ boxShadow: "0px 5px 40px 0px rgba(0, 0, 0, 0.03)" }}
        >
          <h2 className="font-bold mb-11 text-[24px] leading-[28px]">Kirish</h2>
          <MyInput
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
            value={formData.username}
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
          <MyButton type="submit">Kirish</MyButton>
        </form>
      </div>
      {error && <ErrorModal message={error} onClose={closeErrorModal} />}
    </div>
  );
};

export default page;
