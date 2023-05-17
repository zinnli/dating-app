import { ax } from "./axios";

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
