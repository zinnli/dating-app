import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_API,
});

const createInstance = (): AxiosInstance => {
  return setInterceptors(instance);
};

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = accessToken;
    }
    return config;
  });
  return instance;
};

export const ax = createInstance();

export const test = async () => {
  const { data } = await ax.get("/test");
  return data;
};
