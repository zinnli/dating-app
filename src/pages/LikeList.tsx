import React, { useState } from "react";
import { useQuery } from "react-query";
import styled, { css } from "styled-components";

import { getAffinity } from "apis";
import { ArrowIcon } from "assets";

const LikeList = () => {
  const [currentReceievePage, setCurrentReceievePage] = useState(1);
  const [currentSendPage, setCurrentSendPage] = useState(1);
  const [tab, setTab] = useState("send?");

  const { data } = useQuery(["affinity"], getAffinity);

  const ITEMS_PER_PAGE = 5;

  if (!data) return null;

  const totalsendPages = Math.ceil(data.send.length / ITEMS_PER_PAGE);
  const totalreceievePages = Math.ceil(data.receieve.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    tab === "send"
      ? setCurrentSendPage((prevPage) => Math.min(prevPage + 1, totalsendPages))
      : setCurrentReceievePage((prevPage) =>
          Math.min(prevPage + 1, totalsendPages)
        );
  };

  const previousPage = () => {
    tab === "send"
      ? setCurrentSendPage((prevPage) => Math.max(prevPage - 1, 1))
      : setCurrentReceievePage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const compareCurrent = tab === "send" ? currentSendPage : currentReceievePage;

  const startIndex = (compareCurrent - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const itemsSendToShow = data.send.slice(startIndex, endIndex);
  const itemsReceieveToShow = data.receieve.slice(startIndex, endIndex);

  return (
    <Root>
      <CommunityWrapper>
        <Title onClick={() => setTab("send")}>보낸 하트</Title>
        <Title onClick={() => setTab("receieve")}>받은 하트</Title>
      </CommunityWrapper>
      {tab === "send" ? (
        <BoxWrapper id="send">
          {itemsSendToShow.map((send: any) => (
            <ListItem key={send.userId}>
              <Image src={send.profileImgUrl} />
              <Name>{send.nickname}</Name>
              <ConfirmBtn>취소</ConfirmBtn>
            </ListItem>
          ))}
        </BoxWrapper>
      ) : (
        <BoxWrapper id="receive">
          {itemsReceieveToShow.map((receieve: any) => (
            <ListItem key={receieve.userId}>
              <Image src={receieve.profileImgUrl} />
              <Name>{receieve.nickname}</Name>
              <ConfirmBtn>받기</ConfirmBtn>
            </ListItem>
          ))}
        </BoxWrapper>
      )}
      <Pagination>
        <Button disabled={compareCurrent === 1} onClick={previousPage}>
          <ArrowIcon />
        </Button>
        {tab === "send" ? currentSendPage : currentReceievePage}
        <Button
          disabled={
            compareCurrent ===
            (tab === "send" ? totalsendPages : totalreceievePages)
          }
          onClick={nextPage}
        >
          <ArrowIcon />
        </Button>
      </Pagination>
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
  margin: 35px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.button`
  ${({ theme }) => css`
    margin: 10px 0;
    font: ${theme.font.bold_14};
  `}
`;

const ListItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 50px 1fr 60px;
    gap: 7px;
    align-items: center;
    width: 100%;
    border: 2px solid ${theme.color.yellow_01};
    border-radius: 2px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: ${theme.color.white};
  `}
`;

const Image = styled.img`
  ${({ theme }) => css`
    width: 45px;
    height: 45px;
    border-radius: 2px;
    background-color: ${theme.color.yellow_01};
  `}
`;

const Name = styled.p`
  ${({ theme }) => css`
    height: fit-content;
    padding: 0 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
    font: ${theme.font.regular_12};
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    & > svg {
      width: 20px;
      height: 20px;
    }

    &:last-of-type > svg {
      transform: rotate(180deg);
    }

    &:disabled {
      & > svg > path {
        stroke: ${theme.color.gray_03};
      }
    }
  `}
`;
