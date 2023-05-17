import axios from "axios";

const baseUrl = process.env.REACT_APP_AXIOS_API;

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_API,
});

const createInstance = () => {
  return setInterceptors(instance);
};

const setInterceptors = (instance: any) => {
  instance.interceptors.request.use((config: any) => {
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
  const { data } = await instance.get("/test");
  return data;
};

export const getUser = async () => {
  const { data } = await ax.get("/auth/user");
  return data;
};
