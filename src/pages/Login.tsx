import { Link } from "react-router-dom";
import { css, styled } from "styled-components";

const Login = () => {
  return (
    <Root>
      <Title>💛</Title>
      <LoginInput>
        <Label htmlFor="id">아이디</Label>
        <Input type="text" id="id" />
      </LoginInput>
      <LoginInput>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" />
      </LoginInput>
      <Button>로그인</Button>
      <RegisterLink to="/register">회원은 아직이신가요?</RegisterLink>
    </Root>
  );
};

export default Login;

const Root = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
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

const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    border: 1px solid ${theme.color.gray_01};
    border-radius: 2px;
  `}
`;

const Button = styled.button`
  ${({ theme }) => css`
    width: 280px;
    padding: 10px;
    margin: 20px 0 0 0;
    font: ${theme.font.regular_13};
    color: ${theme.color.white};
    background-color: ${theme.color.yellow_01};
  `}
`;

const RegisterLink = styled(Link)`
  ${({ theme }) => css`
    align-self: flex-end;
    color: ${theme.color.gray_02};
  `}
`;
