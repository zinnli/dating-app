import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import LogoutModal from "../modal/LogoutModal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState<boolean>();

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
        <LinkButton path="/like" icon={<ArrowIcon />} />
        <LinkButton path="/like" icon={<HomeIcon />} />
        <IconRigthWrapper>
          <LinkButton path="/likelist" icon={<HeartIcon />} />
          <LinkButton path="/mypage" icon={<UserIcon />} />
          <ModalBtn onClick={HandleLoginCheck}>
            <DotsIcon />
          </ModalBtn>
          {modalOpen && (
            <ModalPortal>
              <LogoutModal onClose={HandleModalShow} />
            </ModalPortal>
          )}
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

    & > a:nth-of-type(2) {
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

const IconRigthWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    align-items: center;

    & > a > svg {
      height: 30px;
      width: 30px;
      margin: 0 7px;

      & > path {
        stroke: ${theme.color.black};
      }
    }

    & > button:last-of-type > svg {
      margin: 0 7px 0 0;
    }
  `}
`;

const ModalBtn = styled.button`
  ${({ theme }) => css`
    height: 30px;
    width: 30px;
    border-radius: 2px;
    margin: 0 7px 0 0;
    padding: 0 2px 0 0;

    & > svg {
      height: 30px;
      width: 30px;
      margin: 0 7px;

      & > path {
        stroke: ${theme.color.black};
      }
    }
  `}
`;
