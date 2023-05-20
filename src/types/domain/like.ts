export interface PatchLikeType {
  userId: string;
  profileImgUrl: string;
  nickname: string;
}

export interface PatchAffinityType {
  targetUserId: string;
}

export interface PaginationProps {
  receieve: [{ userId: string; profileImgUrl: string; nickname: string }];
  send: [{ userId: string; profileImgUrl: string; nickname: string }];
}
