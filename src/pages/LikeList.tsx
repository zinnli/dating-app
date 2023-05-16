import React, { useState } from "react";
import styled, { css } from "styled-components";

const LikeList = () => {
  const [tab, setTab] = useState("send");
  return (
    <Root>
      <CommunityWrapper>
        <Title onClick={() => setTab("send")}>받은 하트</Title>
        <Title onClick={() => setTab("receive")}>보낸 하트</Title>
      </CommunityWrapper>
      {tab === "send" ? (
        <BoxWrapper id="send">
          <ListItem>
            <Image>사진</Image>
            <Name>닉네임</Name>
            <ConfirmBtn>받기</ConfirmBtn>
          </ListItem>
          <ListItem>
            <Image>사진</Image>
            <Name>닉네임</Name>
            <ConfirmBtn>받기</ConfirmBtn>
          </ListItem>
        </BoxWrapper>
      ) : (
        <BoxWrapper id="receive">
          <ListItem>
            <Image>사진</Image>
            <Name>닉네임</Name>
            <ConfirmBtn>취소</ConfirmBtn>
          </ListItem>
          <ListItem>
            <Image>사진</Image>
            <Name>닉네임</Name>
            <ConfirmBtn>취소</ConfirmBtn>
          </ListItem>
        </BoxWrapper>
      )}
      <Pagination>1</Pagination>
    </Root>
  );
};

export default LikeList;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CommunityWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 30px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const Title = styled.button`
  ${({ theme }) => css`
    margin: 20px 0;
    font: ${theme.font.bold_14};
  `}
`;

const ListItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 40px 1fr 50px;
    gap: 10px;
    align-items: center;
    width: 100%;
    border: 2px solid ${theme.color.yellow_01};
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: ${theme.color.white};
  `}
`;

const Image = styled.div`
  ${({ theme }) => css`
    width: 35px;
    height: 35px;
    border-radius: 2px;
    background-color: ${theme.color.yellow_01};
  `}
`;

const Name = styled.p`
  ${({ theme }) => css`
    height: fit-content;
    font: ${theme.font.regular_12};
  `}
`;

const ConfirmBtn = styled.button`
  ${({ theme }) => css`
    border-radius: 2px;
    padding: 5px;
    margin: 10px 0;
    font: ${theme.font.regular_12};
    color: ${theme.color.white};
    background-color: ${theme.color.yellow_01};
  `}
`;

const Pagination = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px 0;
    text-align: center;
    background-color: ${theme.color.red_01};
  `}
`;
