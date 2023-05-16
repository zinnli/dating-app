import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { signup } from "apis/axios";

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
    onSuccess: (res: any) => {
      console.log("success", res);
      navigate("/");
    },
    onError: (err: any) => {
      alert(err.response.data.message);
    },
  });

  const handleRegister = (data: any) => {
    Signup({
      userId: data.userId,
      password: data.password,
      nickname: data.nickname,
    });
  };

  return (
    <Root onSubmit={handleSubmit(handleRegister)}>
      <Title>회원가입</Title>
      <RegisterInput>
        <Label htmlFor="userId">아이디</Label>
        <Input
          type="text"
          id="userId"
          value={watch("userId")}
          isError={!!errors.userId}
          placeholder="아이디를 입력하세요"
          {...register("userId", {
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
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          id="password"
          value={watch("password")}
          isError={!!errors.password}
          placeholder="비밀번호를 입력하세요"
          {...register("password", {
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
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="nickname">닉네임</Label>
        <Input
          type="text"
          id="nickname"
          value={watch("nickname")}
          isError={!!errors.nickname}
          placeholder="닉네임을 입력하세요"
          {...register("nickname", {
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
      </RegisterInput>
      <Button disabled={Object.keys(errors).length !== 0}>회원가입</Button>
    </Root>
  );
};

export default Register;

const Root = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    font: ${theme.font.bold_16};
  `}
`;

const RegisterInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  width: 280px;
`;

const Label = styled.label`
  ${({ theme }) => css`
    margin-bottom: 5px;
    font: ${theme.font.regular_12};
  `}
`;

const Input = styled.input<{ isError: boolean }>`
  ${({ theme, isError }) => css`
    width: 100%;
    height: 40px;
    border: 1px solid ${isError ? theme.color.red_02 : theme.color.gray_01};
    border-radius: 2px;
    margin-bottom: ${!isError && "27px"};
  `}
`;

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    padding: 3px 0;
    margin-bottom: 6px;
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
