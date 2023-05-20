import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  ArrowIcon,
  DotsIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "assets/icons";
import LinkButton from "../button/LinkButton";
import ModalPortal from "../portal/ModalPortal";

const Header = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>();

  const ClickHandleBack = () => {
    navigate(-1);
  };

  const HandleLoginCheck = () => {
    setModalOpen(true);
    return;
  };

  const HandleModalShow = () => {
    setModalOpen(false);
  };

  return (
    <Root>
      <IconWrapper>
        <Button onClick={ClickHandleBack}>
          <ArrowIcon />
        </Button>
        <LinkButton path="/like" icon={<HomeIcon />} />
        <IconRigthWrapper>
          <LinkButton path="/likelist" icon={<HeartIcon />} />
          <LinkButton path="/mypage" icon={<UserIcon />} />
        </IconRigthWrapper>
      </IconWrapper>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  ${({ theme }) => css`
    width: 450px;
    height: 50px;
    background-color: ${theme.color.white};
  `}
`;

const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    & > a:nth-of-type(1) {
      text-align: center;
    }

    & > a > svg {
      height: 30px;
      width: 30px;
      margin: 5px 20px;

      & > path {
        stroke: ${theme.color.black};
      }
    }
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    text-align: start;
    & > svg {
      height: 30px;
      width: 30px;
      margin: 5px 20px;

      & > path {
        stroke: ${theme.color.black};
      }
    }
  `}
`;

const IconRigthWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 150px;
    height: 40px;

    & > a > svg {
      height: 30px;
      width: 30px;
      margin: 0 7px;

      & > path {
        stroke: ${theme.color.black};
      }
    }

    & > a:last-of-type > svg {
      margin: 0 15px 0 0;
    }
  `}
`;
