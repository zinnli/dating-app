import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  ArrowIcon,
  DotsIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "assets/icons";

const Header = () => {
  return (
    <Root>
      <IconWrapper>
        <Link to="/like">
          <ArrowIcon />
        </Link>
        <Link to="/likelist">
          <HomeIcon />
        </Link>
        <IconRigthWrapper>
          <Link to="/like">
            <HeartIcon />
          </Link>
          <Link to="/mypage">
            <UserIcon />
          </Link>
          <Link to="/likelist">
            <DotsIcon />
          </Link>
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

    & > a:last-of-type > svg {
      margin: 0 7px 0 0;
    }
  `}
`;
