import axios from "axios";

const BASE_URL = "http://localhost:7000";
//const BASE_URL = "https://cms-ttf.herokuapp.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const apip = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
