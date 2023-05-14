import React from "react";
import styled, { css } from "styled-components";

import { ArrowIcon, DotsIcon, HeartIcon, UserIcon } from "assets/icons";

const Header = () => {
  return (
    <Root>
      <IconWrapper>
        <ArrowIcon />
        <IconRigthWrapper>
          <HeartIcon />
          <UserIcon />
          <DotsIcon />
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    & > svg {
      height: 30px;
      width: 30px;
      margin: 0 5px;

      & > path {
        stroke: ${theme.color.black};
      }
    }
  `}
`;

const IconRigthWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
      height: 30px;
      width: 30px;
      margin: 0 5px;

      & > path {
        stroke: ${theme.color.black};
      }

      &:nth-of-type(2) {
        margin: 0 0 0 5px;
      }

      &:last-of-type {
        height: 40px;
        width: 40px;
        margin: 0 5px 0 0;
      }
    }
  `}
`;
