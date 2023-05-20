import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { FormInput } from "components";
import { changeInfo, getUser } from "apis";
import { CancelIcon } from "assets";

interface MypageModalProps {
  onClose: () => void;
}

const MypageModal = ({ onClose }: MypageModalProps) => {
  const queryClient = useQueryClient();

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

  const { data } = useQuery(["mypage"], getUser, {
    refetchOnWindowFocus: false,
    staleTime: 5000,
    cacheTime: Infinity,
  });

  const { mutate: ChangeInfo } = useMutation(changeInfo, {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries(["mypage"]);
    },
    onError: (err: any) => {
      alert(err.response.data.message);
    },
  });

  const handleMyInfo = (data: any) => {
    ChangeInfo(
      {
        nickname: data.nickname,
        profileImgUrl: data.profileImgUrl,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <Root>
      <CancelBtn type="button" onClick={onClose}>
        <CancelIcon />
      </CancelBtn>
      <FormWapper onSubmit={handleSubmit(handleMyInfo)}>
        <FormInput
          id="nickname"
          name="닉네임"
          defaultValue={data.nickname}
          register={register("nickname", {
            required: true,
          })}
        />
        <ImgWrapper
          type="file"
          id="profileImgUrl"
          name="이미지 업로드"
          register={register("profileImgUrl")}
        />
        <ImgPreview></ImgPreview>
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
    height: 500px;
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
  ${({ theme }) => css`
    & > input {
      border: 0;
      margin: 0;
    }
  `}
`;

const ImgPreview = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid red;
`;
