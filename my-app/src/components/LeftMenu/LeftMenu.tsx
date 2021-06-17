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
    /* background-color: ${Colors.SilverPink}; */
    float:left;
    margin-top:50px;
`;

const ProfileBox = styled.div`
    height: 280px;
    width: 280px;
    background-color: ${Colors.OldLavender};
    margin:auto;
    border-radius:15px;
    border-width:5px;
    border-style:solid;
    border-color: ${Colors.Independence};
`;
const Profile = styled.div`
    text-align: center;
`;
const LogoIcon = styled.img`
    margin-top: 10px;
    height: 50%;
    width: 50%;
    border-radius:50%;
`;
const UserName = styled.div`
`;
const YourNet = styled.div`
    margin-top:25px;
    margin-bottom:25px;
`;
const NetIcon = styled.img`         
    margin-left:25px;
    float:left;
    margin-right:50px;
`;
const UserIcon = styled.img`
    margin-right:25px;
    float:right;
    border: 2px solid ${Colors.Independence};
    border-radius:10px;
    padding:4px;
    margin-top:-5px;
`;
const YourPub = styled.div`
`;
const Pub1Icon = styled.img`       
    margin-left:25px;
    float:left;
    margin-right:40px;
`;
const PlusIcon = styled.img`
    margin-right:25px;
    float:right;
    border: 2px solid ${Colors.Independence};
    border-radius:10px;
    padding:4px;
    margin-top:-5px;
`;
const LeftPanelIcons = styled.div`
    margin-left: 100px;
    margin-top: 35px;
`;
const PubIcon = styled.div`
    margin-bottom:25px;
    
`;

const EcoIcon = styled.div`
    margin-bottom:25px;
`;

const EntityIcon = styled.div`
`;
const Icon = styled.img`
    margin-right:35px;
    float:left;
    margin-top:-3px;
    height:22px;
    width:22px;
`;

export const LeftMenu: FC = () => {
    const { usersList, photosList} = useSelector<IState, IUsersReducers & IPhotosReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));
    return (
       <LeftPanel>
           <ProfileBox>
               <Profile>
               <Link to="/profile">
                    <LogoIcon  
                        src={photosList[1]?photosList[1].thumbnailUrl:""}/>       
                    <UserName>
                        {usersList[0]?usersList[0].name:""}
                    </UserName>  
                    </Link>
               </Profile>
               <YourNet>
                    <NetIcon src="./media/icons/network.png" alt="" />
                    <Link to="/network"> Your Network </Link>
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
                <Link to="/publications">
                <Icon src="./media/icons/publications.png" alt="" />
                    Publications</Link> 
               </PubIcon>
               <EcoIcon>
                <Icon src="./media/icons/ecosystem.png" alt="" />
                <Link to="/ecosystem">Ecosystem</Link> 
               </EcoIcon>
               <EntityIcon>
                <Icon src="./media/icons/entities.png" alt="" />
                <Link to="/entities">Entities</Link> 
               </EntityIcon>
           </LeftPanelIcons>
       </LeftPanel>
    );
};