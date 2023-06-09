import React, { useState } from "react";
import styled, { css } from "styled-components";

import { useGetMember, usePatchDislike, usePatchLike } from "services";
import type { PatchLikeType } from "types";

const Like = () => {
  const [idx, setIdx] = useState(0);

  const { data } = useGetMember();
  const { mutate: PatchLike } = usePatchLike();
  const { mutate: PatchDislike } = usePatchDislike();

  const handleLike = () => {
    PatchLike(
      {
        targetUserId: data[idx].userId,
      },
      {
        onSuccess: () => {
          setIdx(idx + 1);
        },
        onError: (err: any) => {
          console.log(err.response.data.message);
        },
      }
    );
  };

  const handleDislike = () => {
    PatchDislike(
      {
        targetUserId: data[idx].userId,
      },
      {
        onSuccess: () => {
          setIdx(idx + 1);
        },
        onError: (err: any) => {
          console.log(err.response.data.message);
        },
      }
    );
  };

  return (
    <>
      {data &&
        data.slice(idx, idx + 1).map((item: PatchLikeType) => (
          <Root key={item.userId}>
            <ImgWrapper>
              <img src={item.profileImgUrl} />
            </ImgWrapper>
            <NameWrapper>
              <Name>{item.nickname}</Name>
            </NameWrapper>
            <ButtonWrapper>
              <DisLikeBtn onClick={handleDislike}>싫어요 :(</DisLikeBtn>
              <LikeBtn onClick={handleLike}>좋아요 :D</LikeBtn>
            </ButtonWrapper>
          </Root>
        ))}
    </>
  );
};

export default Like;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  margin-bottom: 20px;

  & > img {
    height: 250px;
    width: 250px;
    border-radius: 2px;
    object-fit: cover;
    overflow: hidden;
  }
`;

const NameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 12px 15px;
    background-color: ${theme.color.gray_01};
  `}
`;

const Name = styled.p`
  ${({ theme }) => css`
    font: ${theme.font.bold_14};
  `}
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 250px;
    font: ${theme.font.bold_12};
  `}
`;

const DisLikeBtn = styled.button`
  ${({ theme }) => css`
    width: 140px;
    border-radius: 2px;
    padding: 10px;
    margin: 20px 0;
    color: ${theme.color.white};
    background-color: ${theme.color.blue_01};
  `}
`;

const LikeBtn = styled.button`
  ${({ theme }) => css`
    width: 140px;
    border-radius: 2px;
    padding: 12px;
    margin: 20px 0;
    color: ${theme.color.white};
    background-color: ${theme.color.red_02};
  `}
`;
