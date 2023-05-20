import { ax } from "./axios";
import type { PatchChangeInfoType, PostLoginType, PostSignupType } from "types";

export const signup = async (req: PostSignupType) => {
  const { data } = await ax.post("/auth/signup", {
    userId: req.userId,
    nickname: req.nickname,
    password: req.password,
  });

  return data;
};

export const login = async (req: PostLoginType) => {
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

export const changeInfo = async (req: PatchChangeInfoType) => {
  const { data } = await ax.patch("/member", {
    nickname: req.nickname,
    profileImgUrl: req.profileImgUrl,
  });

  return data;
};
