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

const ax = createInstance();

export const test = async () => {
  const { data } = await instance.get("/test");
  return data;
};

export const signup = async (req: any) => {
  const { data } = await ax.post("/auth/signup", {
    userId: req.userId,
    nickname: req.nickname,
    password: req.password,
  });

  return data;
};

export const login = async (req: any) => {
  const { data } = await ax.post("/auth/signin", {
    userId: req.userId,
    password: req.password,
  });

  return data;
};

export const getUser = async () => {
  const { data } = await ax.get("/auth/user");
  return data;
};

export const getMember = async () => {
  const { data } = await ax.get("/member/list");
  return data;
};

export const patchLike = async (req: any) => {
  const { data } = await ax.patch("/affinity/like", req);

  return data;
};

export const patchDislike = async (req: any) => {
  const { data } = await ax.patch("/affinity/dislike", req);

  return data;
};
