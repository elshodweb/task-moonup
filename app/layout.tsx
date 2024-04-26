"use client";
import { Rubik } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "./api/axiosInstance";
import { store } from "./store/config-store";
import { Provider } from "react-redux";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigate = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const token = localStorage.getItem("tk-access");
    if (token) {
      axiosInstance
        .get("/dashboard", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            navigate.push("/sponsors/1703");
          } else {
            navigate.push("/login");
          }
          setLoading(false);
        })
        .catch((err) => {
          navigate.push("/login");
          setLoading(false);
        });
    } else {
      navigate.push("/login");
      setLoading(false);
    }
  }, [loading]);
  if (loading) {
    return (
      <html lang="en">
        <head>
          <title>Loading...</title>
        </head>
        <body suppressHydrationWarning={true}>
          <h1 className="text-center ">Loading...</h1>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <head>
          <title>metsenat</title>
        </head>
        <body className={rubik.className} suppressHydrationWarning={true}>
          <Provider store={store}>{children}</Provider>
        </body>
      </html>
    );
  }
}
