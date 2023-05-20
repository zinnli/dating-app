import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { signup } from "apis";
import { FormInput } from "components";
import type { PostSignupType } from "types";

const Register = () => {
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      userId: "",
      password: "",
      nickname: "",
    },
  });

  const { mutate: Signup } = useMutation(signup, {
    onSuccess: () => {
      navigate("/");
    },
    onError: (err: any) => {
      alert(err.response.data.message);
    },
  });

  const handleRegister = (data: PostSignupType) => {
    Signup({
      userId: data.userId,
      password: data.password,
      nickname: data.nickname,
    });
  };

  return (
    <Root onSubmit={handleSubmit(handleRegister)}>
      <Title>회원가입</Title>
      <FormInput
        type="text"
        id="userId"
        name="아이디"
        isError={!!errors.userId}
        placeholder="아이디를 입력하세요"
        register={register("userId", {
          required: "아이디를 입력해주세요",
          pattern: {
            value: /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/,
            message: "아이디는 3-10글자의 영어와 숫자로 입력해주세요.",
          },
        })}
      />
      <ErrorMsg>
        {errors.userId && "아이디는 3-10글자의 영어와 숫자로 입력해주세요."}
      </ErrorMsg>
      <FormInput
        type="password"
        id="password"
        name="비밀번호"
        isError={!!errors.password}
        placeholder="비밀번호를 입력하세요"
        register={register("password", {
          required: "비밀번호를 입력해주세요",
          pattern: {
            value: /^[a-zA-Z0-9!@#$%^&*()._-]{3,10}$/,
            message: "비밀번호는 3-10글자로 입력해주세요.",
          },
        })}
      />
      <ErrorMsg>
        {errors.password && "비밀번호는 3-10글자로 입력해주세요."}
      </ErrorMsg>
      <FormInput
        type="text"
        id="nickname"
        name="닉네임"
        isError={!!errors.nickname}
        placeholder="닉네임을 입력하세요"
        register={register("nickname", {
          required: "닉네임을 입력해주세요",
          pattern: {
            value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{3,10}$/,
            message: "닉네임은 3-10글자의 영어,숫자,한글로 입력해주세요.",
          },
        })}
      />
      <ErrorMsg>
        {errors.nickname &&
          "닉네임은 3-10글자의 영어,숫자,한글로 입력해주세요."}
      </ErrorMsg>
      <Button disabled={Object.keys(errors).length !== 0}>회원가입</Button>
    </Root>
  );
};

export default Register;

const Root = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  & > div > input {
    margin-bottom: 3px;
  }
`;

const Title = styled.h2`
  ${({ theme }) => css`
    align-self: center;
    margin-bottom: 20px;
    font: ${theme.font.bold_16};
  `}
`;

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    padding: 3px 0;
    margin-bottom: 15px;
    font: ${theme.font.regular_8};
    color: ${theme.color.red_02};
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    width: 280px;
    padding: 10px;
    margin: 30px 0 0 0;
    font: ${theme.font.regular_13};
    color: ${theme.color.white};
    background-color: ${theme.color.yellow_01};

    &:disabled {
      opacity: 0.2;
    }
  `}
`;
