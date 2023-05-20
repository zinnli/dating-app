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

export const getUser = async () => {
  const { data } = await ax.get("/auth/user");
  return data;
};

export const changeInfo = async (req: any) => {
  const { data } = await ax.patch("/member", {
    nickname: req.nickname,
    profileImgUrl: req.profileImgUrl,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  return data;
};
