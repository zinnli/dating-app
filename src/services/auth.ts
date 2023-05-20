import { useMutation, useQuery, useQueryClient } from "react-query";

import { changeInfo, getUser, login, signup } from "apis";
import type { PatchChangeInfoType, PostLoginType, PostSignupType } from "types";

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: PostLoginType) => login(req),
    onSuccess: (res) => {
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
    },
    onError: (err: any) => {
      console.log(err.response.data.message);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (req: PostSignupType) => signup(req),
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ["mypage"],
    queryFn: () => getUser(),
    select: (res) => ({
      ...res,
    }),
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
  });
};

export const useChangeInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: PatchChangeInfoType) => changeInfo(req),
    onSuccess: () => {
      queryClient.invalidateQueries(["mypage"]);
    },
    onError: (err: any) => {
      alert(err.response.data.message);
    },
  });
};
