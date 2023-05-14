import axios from "axios";

const baseUrl = process.env.REACT_APP_AXIOS_API;

const instance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_API,
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
