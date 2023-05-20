import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { ModalPortal, MypageModal } from "components";
import { PencilIcon } from "assets";
import { useGetUser } from "services";
import { Theme } from "types/declare/theme";

const Mypage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>();

  const { data } = useGetUser();

  const HandleLoginCheck = () => {
    setModalOpen(true);
    return;
  };

  const HandleModalShow = () => {
    setModalOpen(false);
  };

  const ClickHandleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  return (
    <Root>
      <ImgWrapper src={data?.profileImgUrl} />
      <MyWrapper>
        <Name>{data?.nickname}</Name>
        <ModalBtn onClick={HandleLoginCheck}>
          <PencilIcon />
        </ModalBtn>
        {modalOpen && (
          <ModalPortal>
            <MypageModal onClose={HandleModalShow} />
          </ModalPortal>
        )}
      </MyWrapper>
      <ButtonWrapper>
        <ILikeBtn>내가 좋아한 사람</ILikeBtn>
        <YouLikeBtn>나를 좋아한 사람</YouLikeBtn>
        <LogoutBtn onClick={ClickHandleLogout}>로그아웃</LogoutBtn>
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

const ImgWrapper = styled.img`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    width: 230px;
    object-fit: contain;
    border: 1px solid ${theme.color.gray_02};
    border-radius: 2px;
    margin-bottom: 20px;
    background-color: ${theme.color.white};
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
    padding-left: 30px;
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
