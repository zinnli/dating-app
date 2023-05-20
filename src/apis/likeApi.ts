import { ax } from "./axios";
import type { PatchAffinityType } from "types";

export const getMember = async () => {
  const { data } = await ax.get("/member/list");
  return data;
};

export const patchLike = async (req: PatchAffinityType) => {
  const { data } = await ax.patch("/affinity/like", req);

  return data;
};

export const patchDislike = async (req: PatchAffinityType) => {
  const { data } = await ax.patch("/affinity/dislike", req);

  return data;
};

export const getAffinity = async () => {
  const { data } = await ax.get("/affinity/list");
  return data;
};
