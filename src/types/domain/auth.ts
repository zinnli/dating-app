export interface PostSignupType {
  userId: string;
  nickname: string;
  password: string;
}

export interface PostLoginType {
  userId: string;
  password: string;
}

export interface PatchChangeInfoType {
  nickname: string;
  profileImgUrl: string;
}
