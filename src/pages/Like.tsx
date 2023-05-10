import React from "react";
import { styled } from "styled-components";

const Like = () => {
  return (
    <Root>
      <ImgWrapper>이미지</ImgWrapper>
      <Name>nickname</Name>
      <ButtonWrapper>
        <DisLikeBtn>dislike</DisLikeBtn>
        <LikeBtn>like</LikeBtn>
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
  height: 100%;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

const Name = styled.p`
  margin-bottom: 40px;
  font-size: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 250px;
`;

const DisLikeBtn = styled.button`
  width: 100px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  font-size: 15px;
  color: #fff;
  background-color: orangered;
`;

const LikeBtn = styled.button`
  width: 100px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  font-size: 15px;
  color: #fff;
  background-color: skyblue;
`;
