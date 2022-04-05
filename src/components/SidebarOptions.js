import React from 'react'
import styled from "styled-components";
import { db } from '../firebase';
import { useDispatch } from "react-redux";
import { enterRoom } from '../features/appSlice';

function SidebarOptions({Icon, title,AddChannelOption, id}) {
const dispatch = useDispatch();
const addChannel = () => {
    const channelName = prompt('please enter the channel name')

    if(channelName){
        db.collection('rooms').add({
            name:channelName
        })
    }
}
const selectChannel = () => {
    if(id){
        dispatch(enterRoom({
            roomId:id
        }))
    }
}

    return (
        <SidebarOptionsContainer 
        onClick={AddChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontsize="small" style={{padding:10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
display: flex;
align-items:center;
font-size:12px;
cursor:pointer;
padding-left:2px;

:hover{
   opacity:0.9;
   background-color:#340e36; 
}

>h3{
    font-weight:500;
}

> h3 > span {
    padding:15px;
}
`;

const SidebarOptionChannel = styled.div`
padding:10px 10px;
font-weight:600;
align-items:center;

>span{
    padding:5px;
}
`;

