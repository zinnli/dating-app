import { styled } from "styled-components";

const Login = () => {
  return (
    <Root>
      <Title>너와 나</Title>
      <LoginInput>
        <Label htmlFor="id">id</Label>
        <Input type="text" id="id" />
      </LoginInput>
      <LoginInput>
        <Label htmlFor="password">password</Label>
        <Input type="password" id="password" />
      </LoginInput>
      <Button>login</Button>
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
  margin-bottom: 40px;
  font-size: 30px;
`;

const LoginInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  width: 300px;
  padding: 10px;
  margin: 20px 0;
  font-size: 15px;
  color: #fff;
  background-color: cadetblue;
`;
