// api/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://club.metsenat.uz/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
