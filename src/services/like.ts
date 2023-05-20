import { useMutation, useQuery } from "react-query";

import { getAffinity, getMember, patchDislike, patchLike } from "apis";
import type { PatchAffinityType } from "types";

export const useGetAffinity = () => {
  return useQuery({
    queryKey: ["affinity"],
    queryFn: () => getAffinity(),
    select: (res) => ({
      ...res,
    }),
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
  });
};

export const useGetMember = () => {
  return useQuery({
    queryKey: ["member"],
    queryFn: () => getMember(),
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
    enabled: true,
  });
};

export const usePatchLike = () => {
  return useMutation({
    mutationFn: (req: PatchAffinityType) => patchLike(req),
  });
};

export const usePatchDislike = () => {
  return useMutation({
    mutationFn: (req: PatchAffinityType) => patchDislike(req),
  });
};
