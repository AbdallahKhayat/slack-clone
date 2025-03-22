import { Button } from "@mui/material";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  function signIn(e) {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://images.sftcdn.net/images/t_app-icon-m/p/66b4686e-a4f9-11e6-b5ba-00163ed833e7/72296859/slack-logo"
          alt=""
        />
        <h1>Sing in to Slack</h1>
        <p>slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    color: white;
    background-color: #0a8d48;
    margin-top: 50px;
    text-transform: inherit !important;
  }
`;
