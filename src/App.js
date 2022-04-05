import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import './App.css';
import Header from './components/Header';
import styled from "styled-components"
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./firebase"
import Login from './components/Login';
import Spinner from "react-spinkit"
function App() {
  const [user,loading] = useAuthState(auth)
if(loading){
  return(
    <AppLoading>
      <AppLaodingContents>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HLOg5lGZiwUcRH-vKpanWVgtl7-jFGp5Og4J8_fJ8plRtWxz9h-Kki9nDiTBDausooM&usqp=CAU" alt=""/>
<Spinner 

name="ball-spin-fade-loader"
color="purple"
fadeIn="none"
/>
      </AppLaodingContents>
    </AppLoading>
  )
}




  return (

    <div className="App">
   {
     !user ? (
       <Login />
     ):(
      <BrowserRouter>
   <Header />
    <AppBody>
    <Sidebar />
    <Routes>
       <Route path="/" element={<Chat />}>
      </Route>
    </Routes>
    </AppBody>

  </BrowserRouter>

     )
   }
  
    </div>
  );

}

export default App;

const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%;
`;
const AppLaodingContents = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}
`;

const AppBody = styled.div`
display: flex;
height:100vh;
`;
