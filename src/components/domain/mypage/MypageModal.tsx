import React from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { FormInput } from "components";
import { CancelIcon } from "assets";

interface MypageModalProps {
  onClose: () => void;
}

const MypageModal = ({ onClose }: MypageModalProps) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      nickname: "",
      profileImgUrl: "",
    },
  });

  return (
    <Root>
      <CancelBtn type="button" onClick={onClose}>
        <CancelIcon />
      </CancelBtn>
      <FormWapper>
        <FormInput
          id="nickname"
          name="닉네임"
          register={register("nickname", {
            required: true,
          })}
        />
        <Button disabled={Object.keys(errors).length !== 0}>수정</Button>
      </FormWapper>
    </Root>
  );
};

export default MypageModal;

const Root = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 400px;
    width: 300px;
    padding: 10px;
    transform: translate(-50%, -50%);
    background-color: ${theme.color.white};
  `}
`;

const CancelBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    & > svg {
      width: 30px;
      height: 30px;

      & > path {
        stroke: ${theme.color.gray_04};
      }
    }
  `}
`;

const FormWapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px 20px;
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px;
    margin: 15px 0 0 0;
    font: ${theme.font.regular_13};
    color: ${theme.color.white};
    background-color: ${theme.color.yellow_01};

    &:disabled {
      opacity: 0.2;
    }
  `}
`;
