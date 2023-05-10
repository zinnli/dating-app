import { styled } from "styled-components";

const Register = () => {
  return (
    <Root>
      <Title>회원가입</Title>
      <RegisterInput>
        <Label htmlFor="nickname">nickname</Label>
        <Input type="text" id="nickname" />
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="id">id</Label>
        <Input type="text" id="id" />
      </RegisterInput>
      <RegisterInput>
        <Label htmlFor="password">password</Label>
        <Input type="password" id="password" />
      </RegisterInput>
      <Button>register</Button>
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
  margin-bottom: 40px;
  font-size: 30px;
`;

const RegisterInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 250px;
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
  width: 250px;
  padding: 10px;
  margin: 20px 0;
  font-size: 15px;
  color: #fff;
  background-color: cadetblue;
`;
