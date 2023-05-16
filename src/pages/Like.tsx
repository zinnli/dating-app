import React from "react";
import styled, { css } from "styled-components";

const Like = () => {
  return (
    <Root>
      <ImgWrapper>이미지</ImgWrapper>
      <NameWrapper>
        <Name>닉네임</Name>
      </NameWrapper>
      <ButtonWrapper>
        <DisLikeBtn>싫어요 :(</DisLikeBtn>
        <LikeBtn>좋아요 :D</LikeBtn>
      </ButtonWrapper>
    </Root>
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
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    width: 230px;
    border-radius: 2px;
    margin-bottom: 20px;
    background-color: ${theme.color.yellow_01};
  `}
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
