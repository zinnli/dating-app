import axios from "axios";

const baseUrl = process.env.REACT_APP_AXIOS_API;

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_API,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = accessToken;
  }
  return config;
});

export const test = async () => {
  const { data } = await instance.get("/test");
  return data;
};

export const signup = async (req: any) => {
  const { data } = await instance.post("/auth/signup", {
    userId: req.userId,
    nickname: req.nickname,
    password: req.password,
  });

  return data;
};

export const login = async (req: any) => {
  const { data } = await instance.post("/auth/signin", {
    userId: req.userId,
    password: req.password,
  });

  return data;
};

export const getUser = async () => {
  const { data } = await instance.get("/auth/user", {
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  });
  return data;
};
