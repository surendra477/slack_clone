import React from 'react'
import styled from "styled-components"
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import {Helmet} from "react-helmet";

function Header() {
    const [user] = useAuthState(auth)

    return (
        
        <HeaderContainer>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Surendra Ediga Slack</title>
                <meta name="description" content="Surendra Ediga slack clone"/>
                <meta name="keywords" content="surendra, surendra ediga, Surendra, surendra sies, surendra slac, SURENDRA"></meta>
            </Helmet>
        {/* Header Left */}
        <HeaderLeft>
                <HeaderAvatar 
                onClick={() => auth.signOut()}
src={user?.photoURL}
alt={user?.photoURL}

                />
                <AccessTimeIcon />
        </HeaderLeft>
        {/* Header Search */}
 
<HeaderSearch>
    <SearchIcon />
    <input type="text" placeholder="Search anything"/> 
</HeaderSearch>

        {/* Header Right */}
<HeaderRight>
 <HelpOutlineIcon />
</HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderRight = styled.div`
display:flex;
flex:0.3;
align-items:flex-end;
> .MuiSvgIcon-root{
    margin-left:auto; 
    margin-right:30px;
}
`;

const HeaderSearch = styled.div`
flex:0.4;
display:flex; 
opacity:1;
background-color: #421f44;
border-radius:6px;
text-align:center; 
padding:0  50px;
color:gray;
border: 1px gray solid;

>input {
    background-color:transparent; 
    border:none;
    text-align:center;
    min-width:30vw;
    outline:0;
    color:white;
}
`;

const HeaderContainer = styled.div`
display: flex; 
position:fixed;
width:100%;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color:var(--slack-color);
color:white
`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right:30px;
}
`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity:0.8;
}
`;

