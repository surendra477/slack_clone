import React from 'react'
import styled from "styled-components"
import {Button } from "@material-ui/core"
import { auth, provider } from '../firebase';
 function Login() {
const signIn = (e) => {
e.preventDefault();

auth.signInWithPopup(provider).catch((error) => alert(error.message))
}

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HLOg5lGZiwUcRH-vKpanWVgtl7-jFGp5Og4J8_fJ8plRtWxz9h-Kki9nDiTBDausooM&usqp=CAU" alt=""/>
            <h1>Sign in to Slack</h1>
<p><a href="https://surendraedigaweb.web.app/">Build By Surendra Ediga</a></p>

<Button type="submit" onClick={signIn}>
   Sign in with Google
</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`;
const LoginInnerContainer = styled.div`
padding:100px;
background-color:white;
text-align:center;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
>img{
    object-fit:contain;
    height:100px;
    margin-bottom:40px;
}
>h1{
    margin:20px;
}

>p{
    margin:10px
}


> Button{
  margin-top:50px;
  text-transform:inherit !important;
  background-color:#0a8d48 !important;
  color:white;
}




`;
