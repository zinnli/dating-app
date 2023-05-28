import { useMutation, useQuery, useQueryClient } from "react-query";

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
  });
};

export const usePatchLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: PatchAffinityType) => patchLike(req),
    onSuccess: () => {
      queryClient.invalidateQueries(["member"]);
    },
  });
};

export const usePatchDislike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: PatchAffinityType) => patchDislike(req),
    onSuccess: () => {
      queryClient.invalidateQueries(["member"]);
    },
  });
};
