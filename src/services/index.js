import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-ld3c.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});
export default instance;
