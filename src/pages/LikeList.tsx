import React, { useState } from "react";
import { styled } from "styled-components";

const LikeList = () => {
  const [tab, setTab] = useState("send");
  return (
    <Root>
      <CommunityWrapper>
        <Title onClick={() => setTab("send")}>send</Title>
        <Title onClick={() => setTab("receive")}>receive</Title>
      </CommunityWrapper>
      {tab === "send" ? (
        <SendWrapper id="send">
          <ListItem>
            <Image>사진</Image>
            <Name>nickname</Name>
            <CancelBtn>cancel</CancelBtn>
          </ListItem>
          <ListItem>
            <Image>사진</Image>
            <Name>nickname</Name>
            <CancelBtn>cancel</CancelBtn>
          </ListItem>
        </SendWrapper>
      ) : (
        <ReceiveWrapper id="receive">
          <ListItem>
            <Image>사진</Image>
            <Name>nickname</Name>
            <CancelBtn>receive</CancelBtn>
          </ListItem>
          <ListItem>
            <Image>사진</Image>
            <Name>nickname</Name>
            <CancelBtn>receive</CancelBtn>
          </ListItem>
        </ReceiveWrapper>
      )}
    </Root>
  );
};

export default LikeList;

const Root = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const CommunityWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 40px;
`;

const SendWrapper = styled.div`
  width: 100%;
`;

const ReceiveWrapper = styled.div`
  width: 100%;
`;

const Title = styled.button`
  margin: 20px 0;
  font-size: 20px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 80px;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 60px;
  height: 60px;
  background-color: beige;
`;

const Name = styled.p`
  height: fit-content;
  font-size: 15px;
`;

const CancelBtn = styled.button`
  border-radius: 5px;
  padding: 5px 8px;
  margin: 10px 0;
  font-size: 15px;
  color: #fff;
  background-color: skyblue;
`;
