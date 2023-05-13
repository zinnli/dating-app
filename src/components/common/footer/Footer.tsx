import React from "react";
import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

import { SmileIcon } from "assets";

const Footer = () => {
  return (
    <Root>
      <IconWrapper>
        <Link to="https://zinnli.github.io/" target="_blank" rel="noopener">
          <SmileIcon />
        </Link>
        <Link to="https://github.com/zinnli" target="_blank" rel="noopener">
          zinnli
        </Link>
      </IconWrapper>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  ${({ theme }) => css`
    height: 50px;
    width: 450px;
    background-color: ${theme.color.white};
  `}
`;

const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 15px 0 0;

    & > a {
      ${theme.font.medium_13};

      & > svg {
        height: 30px;
        width: 30px;
        margin: 0 5px;

        & > path {
          stroke: ${theme.color.yellow_01};
        }
      }
    }
  `}
`;
