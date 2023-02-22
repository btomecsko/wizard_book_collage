import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Button from "../styles/Button";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <Logo>Library</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} /> 
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Logo = styled.h1`
  font-family: "Permanent Marker";
  font-size: 3rem;
  color: #d3a625;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 400px;
  margin: 100px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;


export default Login;