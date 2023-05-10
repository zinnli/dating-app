import React from "react";
import { styled } from "styled-components";

const Mypage = () => {
  return (
    <Root>
      <ImgWrapper>사진</ImgWrapper>
      <MyWrapper>
        <Name>userId</Name>
        <ModalBtn>hi</ModalBtn>
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
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

const MyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const Name = styled.p`
  font-size: 30px;
`;

const ModalBtn = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 250px;
`;

const ILikeBtn = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  color: #fff;
  background-color: skyblue;
`;

const YouLikeBtn = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  color: #fff;
  background-color: skyblue;
`;

const LogoutBtn = styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  color: #fff;
  background-color: orangered;
`;
