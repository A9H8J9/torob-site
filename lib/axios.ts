import axios from "axios";

export const baseURL = `http://localhost:3001`;

const axiosClient = axios.create({
  baseURL: baseURL,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosClient };
