import React, {FC} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';
import { ITodosReducers } from '../../reducers/todosReducers';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import {
    Link
} from "react-router-dom";

const LeftPanel = styled.div`
    height: 600px;
    width: 400px;
    background-color: #d3d3d3;
    display: block;
    position:absolute;
`;

const ProfileBox = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    margin:auto;
    margin-top: 30px;
    border-radius:5px;
`;
const UserName = styled.div`
`;
const LeftPanelIcons = styled.div`
    margin-left: 60px;
    margin-top: 10px;
`;
const YourNet = styled.div`
    margin-top:10px;
`;
const YourPub = styled.div`
    margin-top:10px;
`;
const NetIcon = styled.img`         
    margin-left:10px;
`;
const UserIcon = styled.img`
    margin-right:10px;
    float:right;
    border: 1px solid #555;
    border-radius:10px;
    padding:4px;
`;
const Pub1Icon = styled.img`       
    margin-left:10px;
`;
const PlusIcon = styled.img`
    margin-right:10px;
    float:right;
    border: 1px solid #555;
    border-radius:10px;
    padding:4px;
`;
const Profile = styled.div`
    text-align: center;
`;
const LogoIcon = styled.img`
    margin-top: 10px;
    height: 50%;
    width: 50%;
`;
const PubIcon = styled.div`
    padding-top:10px;
    display: flex;
`;

const EcoIcon = styled.div`
    padding-top:10px;
`;

const EntityIcon = styled.div`
    padding-top:10px;
`;


export const LeftMenu: FC = () => {
    const { usersList, photosList, todosList } = useSelector<IState, IUsersReducers & IPhotosReducers & ITodosReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.todos
    }));
    return (
       <LeftPanel>
           <ProfileBox>
               <Profile>
                    <LogoIcon  
                        src={photosList[1]?photosList[1].thumbnailUrl:""}/>       
                    <UserName>
                        {usersList[0]?usersList[0].name:""}
                    </UserName>  
                    {/* {console.log(todosList)} */}
               </Profile>
               <YourNet>
                    <NetIcon src="./media/icons/network.png" alt="" />
                    <Link to="/network">Your Network</Link>
                    <UserIcon src="./media/icons/user-plus.png" alt="" />
               </YourNet>
                <YourPub>
                    <Pub1Icon src="./media/icons/publications.png" alt=""/>
                    <Link to="/publications">Your Publications</Link>
                    <PlusIcon src="./media/icons/plus.png" alt="" />
                </YourPub>
           </ProfileBox>
           <LeftPanelIcons>
               <PubIcon>
                <img src="./media/icons/publications.png" alt="" />
                <Link to="/publications">Publications</Link> 
               </PubIcon>
               <EcoIcon>
                <img src="./media/icons/ecosystem.png" alt="" />
                <Link to="/ecosystem">Ecosystem</Link> 
               </EcoIcon>
               <EntityIcon>
                <img src="./media/icons/entities.png" alt="" />
                <Link to="/entities">Entities</Link> 
               </EntityIcon>
           </LeftPanelIcons>
       </LeftPanel>
    );
};