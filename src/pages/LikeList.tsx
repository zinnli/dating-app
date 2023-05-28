import React, { useState } from "react";
import styled, { css } from "styled-components";

import { usePagination } from "hooks";
import { useGetAffinity, usePatchDislike, usePatchLike } from "services";
import { ArrowIcon } from "assets";

const LikeList = () => {
  const [idx, setIdx] = useState(0);
  const { data, refetch } = useGetAffinity();

  const {
    itemsSendToShow,
    itemsReceieveToShow,
    currentSendPage,
    currentReceievePage,
    totalreceievePages,
    totalsendPages,
    nextPage,
    previousPage,
    compareCurrent,
    tab,
    setTab,
  } = usePagination(data);

  const { mutate: PatchLike } = usePatchLike();
  const { mutate: PatchDislike } = usePatchDislike();

  const handleLike = (e: React.MouseEvent) => {
    PatchLike(
      {
        targetUserId: data.receieve[idx].userId,
      },
      {
        onSuccess: () => {
          setIdx(idx + 1);
          refetch();
        },
        onError: (err: any) => {
          console.log(err.response.data.message);
        },
      }
    );
  };

  const handleDislike = (e: React.MouseEvent) => {
    PatchDislike(
      {
        targetUserId: data.send[idx].userId,
      },
      {
        onSuccess: () => {
          setIdx(idx + 1);
          console.log(e);
          refetch();
        },
        onError: (err: any) => {
          console.log(err.response.data.message);
        },
      }
    );
  };

  if (!data) return null;

  return (
    <Root>
      <CommunityWrapper>
        <Title onClick={() => setTab("send")}>보낸 하트</Title>
        <Title onClick={() => setTab("receieve")}>받은 하트</Title>
      </CommunityWrapper>
      {tab === "send" ? (
        <BoxWrapper id="send">
          {itemsSendToShow.map((send) => (
            <ListItem key={send.userId}>
              <Image src={send.profileImgUrl} />
              <Name>{send.nickname}</Name>
              <ConfirmBtn onClick={(e) => handleDislike(e)}>취소</ConfirmBtn>
            </ListItem>
          ))}
        </BoxWrapper>
      ) : (
        <BoxWrapper id="receive">
          {itemsReceieveToShow.map((receieve) => (
            <ListItem key={receieve.userId}>
              <Image src={receieve.profileImgUrl} />
              <Name>{receieve.nickname}</Name>
              <ConfirmBtn onClick={(e) => handleLike(e)}>받기</ConfirmBtn>
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
    object-fit: contain;
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
