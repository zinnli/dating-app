import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { FormInput } from "components";
import { useChangeInfo, useGetUser } from "services";
import { CancelIcon } from "assets";
import type { PatchChangeInfoType } from "types";

interface MypageModalProps {
  onClose: () => void;
}

const MypageModal = ({ onClose }: MypageModalProps) => {
  const { data } = useGetUser();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      nickname: `${data.nickname}`,
      profileImgUrl: "",
    },
  });

  const { mutate: ChangeInfo } = useChangeInfo();

  const submitHandleMyInfo = (data: PatchChangeInfoType) => {
    ChangeInfo(data, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        console.log(data.profileImgUrl);
      },
    });
  };

  return (
    <Root>
      <ModalWrapper>
        <CancelBtn type="button" onClick={onClose}>
          <CancelIcon />
        </CancelBtn>
        <FormWapper onSubmit={handleSubmit(submitHandleMyInfo)}>
          <FormInput
            id="nickname"
            name="닉네임"
            register={register("nickname")}
          />
          <ImgWrapper
            type="text"
            id="profileImgUrl"
            name="이미지 업로드"
            placeholder="이미지 링크를 입력해주세요."
            register={register("profileImgUrl")}
          />
          <ImgPreview
            defaultValue={data.profileImgUrl}
            src={
              !!watch("profileImgUrl")
                ? watch("profileImgUrl")
                : data.profileImgUrl
            }
          />
          <Button disabled={Object.keys(errors).length !== 0}>수정</Button>
        </FormWapper>
      </ModalWrapper>
    </Root>
  );
};

export default MypageModal;

const Root = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 20;
  `}
`;

const ModalWrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 50%;
    left: 50%;
    height: 500px;
    width: 300px;
    padding: 10px;
    transform: translate(-50%, -50%);
    background-color: ${theme.color.white};
    z-index: 5;
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
    padding: 5px 20px;
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

const ImgWrapper = styled(FormInput)`
  ${({ theme }) => css``}
`;

const ImgPreview = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    object-fit: contain;
    border: 1px solid ${theme.color.gray_01};
    background-color: ${theme.color.white};
  `}
`;
