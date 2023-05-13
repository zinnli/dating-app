import { css, styled } from "styled-components";

const Register = () => {
  return (
    <Root>
      <Title>회원가입</Title>
      <RegisterInput>
        <Label htmlFor="id">아이디</Label>
        <Input type="text" id="id" />
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" />
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="nickname">닉네임</Label>
        <Input type="text" id="nickname" />
      </RegisterInput>
      <Button>회원가입</Button>
    </Root>
  );
};

export default Register;

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
    margin-bottom: 30px;
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
