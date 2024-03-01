import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foot-api.onrender.com',
});
