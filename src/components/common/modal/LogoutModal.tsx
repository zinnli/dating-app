import React from "react";
import styled, { css } from "styled-components";

interface LogoutModalProps {
  onClose: () => void;
}

const LogoutModal = ({ onClose }: LogoutModalProps) => {
  return (
    <>
      <CancelBtn type="button" onClick={onClose}></CancelBtn>
      <LogoutWrapper>Logout</LogoutWrapper>
    </>
  );
};

export default LogoutModal;

const CancelBtn = styled.button`
  ${({ theme }) => css`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 0;

    & > svg {
      width: 30px;
      height: 30px;

      & > path {
        stroke: ${theme.color.gray_04};
      }
    }
  `}
`;

const LogoutWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50px;
    right: 80px;
    width: 70px;
    height: 30px;
    background-color: ${theme.color.yellow_01};
    z-index: 10;
  `}
`;
