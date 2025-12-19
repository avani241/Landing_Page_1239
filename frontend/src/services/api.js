import axios from "axios";

const api = axios.create({
  baseURL: "https://landing-page-1239.onrender.com/api",
});

export default api;
