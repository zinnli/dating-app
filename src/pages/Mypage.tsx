import { PencilIcon } from "assets";
import React from "react";
import { css, styled } from "styled-components";
import { Theme } from "types/declare/theme";

const Mypage = () => {
  return (
    <Root>
      <ImgWrapper>사진</ImgWrapper>
      <MyWrapper>
        <Name>글자수테스트몇글자까지되나</Name>
        <ModalBtn>
          <PencilIcon />
        </ModalBtn>
      </MyWrapper>
      <ButtonWrapper>
        <ILikeBtn>내가 좋아한 사람</ILikeBtn>
        <YouLikeBtn>나를 좋아한 사람</YouLikeBtn>
        <LogoutBtn>로그아웃</LogoutBtn>
      </ButtonWrapper>
    </Root>
  );
};

export default Mypage;

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

const MyWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 30px;
    align-items: center;
    gap: 15px;
    width: 250px;
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 8px 10px;
    background-color: ${theme.color.gray_01};
  `}
`;

const Name = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font: ${theme.font.medium_13};
  `}
`;

const ModalBtn = styled.button`
  ${({ theme }) => css`
    height: 30px;
    width: 30px;
    border-radius: 2px;
    padding: 0 2px 0 0;
    background-color: ${theme.color.gray_02};

    & > svg {
      height: 20px;
      width: 20px;
    }
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 250px;
`;

const mypageBtns = (theme: Theme) => css`
  width: 100%;
  border-radius: 2px;
  padding: 10px;
  font: ${theme.font.medium_13};
  color: ${theme.color.white};
`;

const ILikeBtn = styled.button`
  ${({ theme }) => css`
    ${mypageBtns(theme)};
    background-color: ${theme.color.red_01};
  `}
`;

const YouLikeBtn = styled.button`
  ${({ theme }) => css`
    ${mypageBtns(theme)};
    background-color: ${theme.color.red_01};
  `}
`;

const LogoutBtn = styled.button`
  ${({ theme }) => css`
    ${mypageBtns(theme)};
    background-color: ${theme.color.red_02};
  `}
`;
