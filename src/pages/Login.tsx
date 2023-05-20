import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { FormInput } from "components";
import { useLogin } from "services";
import type { PostLoginType } from "types";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const { mutate: loginMutate } = useLogin();

  const handleLogin = (data: PostLoginType) => {
    loginMutate(data, {
      onSuccess: () => {
        navigate("/like");
      },
    });
  };

  return (
    <Root
      hasError={!!errors.userId || !!errors.password}
      onSubmit={handleSubmit(handleLogin)}
    >
      <Title>💛</Title>
      <FormInput
        type="text"
        id="userId"
        name="아이디"
        isError={!!errors.userId}
        placeholder="아이디를 입력하세요"
        register={register("userId", {
          required: "아이디를 입력해주세요",
        })}
      />
      <FormInput
        type="password"
        id="password"
        name="비밀번호"
        isError={!!errors.password}
        placeholder="비밀번호를 입력해주세요"
        register={register("password", {
          required: "비밀번호를 입력해주세요",
        })}
      />
      <ErrorMsg>
        {(errors.userId || errors.password) && "빈칸을 입력해주세요"}
      </ErrorMsg>

      <Button disabled={Object.keys(errors).length !== 0}>로그인</Button>
      <RegisterLink to="/register">회원은 아직이신가요?</RegisterLink>
    </Root>
  );
};

export default Login;

const Root = styled.form<{ hasError: boolean }>`
  ${({ hasError }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > div:last-of-type > input {
      margin-bottom: ${hasError ? "0" : "16px"};
    }
  `}
`;

const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 40px;
    font: ${theme.font.bold_16};
  `}
`;

const LoginInput = styled.div`
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

const ErrorMsg = styled.p`
  ${({ theme }) => css`
    align-self: flex-start;
    padding: 8px 0;
    font: ${theme.font.regular_8};
    color: ${theme.color.red_02};
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    width: 280px;
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

const RegisterLink = styled(Link)`
  ${({ theme }) => css`
    align-self: flex-end;
    padding: 10px 0;
    color: ${theme.color.gray_03};
  `}
`;
