import React from 'react'
import styled from 'styled-components';
function SignUp() {
  return (
    <Container>
        <Logo>
            <img src="./amazon-logo.png" alt=""/>
        </Logo>
        <Form>
          <h3>Sign-Up</h3>
          <InputContainer>
            <p>Name</p>
            <input type="text" placeholder='John Smith'/>
          </InputContainer>
          <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='example@example.com'/>
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='********' />
        </InputContainer>
        <SingUpButton>Create Account in Amazon</SingUpButton>
        <Infotext>
          By continuing you agree to <span>Amazon's
          Conditions</span> of Use and <span>Privacy
          Notice</span>.
        </Infotext>
        </Form>
        <LoginButton>Login</LoginButton>
    </Container>
  )
}

const Container = styled.div`
    width: 40%;
    height: fit-content;
    padding: 15px;
    margin: auto;
    flex-direction: column;
    display: flex;
    align-items: center;

`;

const Logo = styled.div`
    width: 150px;
    margin-bottom: 20px;
    img {
      width: 100%;
    }
`;

const Form = styled.form`
    border: 1px solid lightgrey;
    height: 470px;
    width: 55%;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 15px;

    h3{
      font-size: 28px;
      font-weight: 400;
      line-height: 33px;
      align-self: flex-start;
      margin-bottom: 10px;
    }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 1px;
  p{
    font-size: 16px;
    font-weight: 600;
  }
  input{
    width: 95%;
    background-color: #e6efef;
    height: 33px;
    padding-left: 5px;
    border:0.5px;
    border-color: 0.5px solid lightgray;
    border-radius: 3px;
    margin-top: -15px;

    &:hover{
      border: 1px solid orange;
      border-radius: 3px;
      width: 95%;
      height: 33px;
    }
  }  
`;

const LoginButton = styled.button`
  height: 33px;
  width: 40%;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 8px;
  margin-top: 40px;
`;

const Infotext = styled.p`
  font-size: 12px;
  width: 100%;
  margin-top: 30px;
  word-wrap: normal;
  word-break: normal;

  span{
    color: #426bc0;
  }
`;

const SingUpButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 12px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  
  &:hover{
    background-color: #dfdfdf;
    border: 1px;
  }
`;

export default SignUp
