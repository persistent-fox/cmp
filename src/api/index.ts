import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});
