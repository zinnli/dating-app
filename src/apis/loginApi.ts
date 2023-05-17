import { ax } from "./axios";

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
