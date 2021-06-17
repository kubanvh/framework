import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import { Posts } from '../ContentPage/Posts';

import {
    Link
} from "react-router-dom";

const WorkspaceWrapper = styled.div`
    width:1000px;
    height:350px;
    margin-top:50px;
    margin-left:150px;
    border: 5px solid ${Colors.Independence};
    float:left;
    
`;
const TopWorkspace = styled.div`
    background-color:${Colors.Independence};
`;
const WorkspaceImage = styled.img`
    width:1000px;
    height:200px;
`;
const WorkspaceInfo = styled.div`
    float:left;
    background-color:${Colors.SilverPink};
`;
const WorkspaceIcon = styled.img`
    float:left;
    width:60px;
    height:auto;
    margin-left:30px;
    padding: 40px 0;
`;

const WorkspaceTitle = styled.div`
    font-size:22px;
    margin-top:25px;
    margin-left:120px;
    color: ${Colors.Independence};
    font-weight: 700;
`;
const WorkspaceText = styled.div`
     margin-left:120px;
     margin-top:20px;
     color: ${Colors.OldLavender};
`;
const MiddleWorkspace = styled.div`
    width:1050px;
    height:250px;
    border: 5px solid ${Colors.Independence};
    float:left;
    margin-top:50px;
    margin-left:-30px;
    background-color:${Colors.EnglishLavender};
`;
const MiddleWorkspaceText = styled.div`
    float:left;
    margin:15px;
    color: ${Colors.Independence};
`;
const MiddleWorkspaceText1 = styled.div`
    float:right;
    margin:15px;
    color: ${Colors.Independence};
`;
const MiddleWorkspaceBoxes = styled.div`
    float:left;
    position: relative;
`;
const MiddleWorkspaceBox = styled.div`
    width:300px;
    height:150px;
    border: 5px solid ${Colors.Independence};
    margin:20px;
    float:left;
    background-color:${Colors.white};
`;
const MWBBackgroundImage = styled.img`
    height:110px;
    width:auto;
    opacity: 0.2;
    margin:15px;
    position: absolute;
    margin-left:160px;
`;
const NWBIcon = styled.img`
    height:25px;
    width:auto;
    margin:10px;
`;
const NWBTittle = styled.div`
    margin-left:15px;
    font-size:18px;
    color:${Colors.Independence};
`;
const NWBText = styled.div`
    margin:10px;
    color:${Colors.black};
`;
const BottomWorkspace = styled.div`
margin-left:-550px;
`;
export const Workspace: FC = () => {
    return (
        <WorkspaceWrapper>
            <TopWorkspace>
                <WorkspaceImage src="./media/icons/workspace.png" alt=""/>
                <WorkspaceInfo>
                    <WorkspaceIcon src="./media/icons/entities.png" alt=""/>
                    <WorkspaceTitle>Corporate holding</WorkspaceTitle>
                    <WorkspaceText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam architecto, dolores veritatis, non dolor vitae explicabo voluptate molestias tempore ...</WorkspaceText>
                </WorkspaceInfo>
            </TopWorkspace>
            <MiddleWorkspace>
            <MiddleWorkspaceText>Start working on corparate matters</MiddleWorkspaceText>
            <MiddleWorkspaceText1>Hide</MiddleWorkspaceText1>
            <MiddleWorkspaceBoxes>
                <MiddleWorkspaceBox>
                    <MWBBackgroundImage src="media/icons/entities.png"/>
                    <NWBIcon src="media/icons/entities.png"/>
                    <NWBTittle>Explore your entities</NWBTittle>
                    <NWBText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam architecto, dolores veritatis, non dolor vitae explicabo voluptate molestias tempore ...</NWBText>
                </MiddleWorkspaceBox>
                <MiddleWorkspaceBox>
                    <MWBBackgroundImage src="media/icons/diagram.png"/>
                    <NWBIcon src="media/icons/diagram.png"/>
                    <NWBTittle>Structure the ownership</NWBTittle>
                    <NWBText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam architecto, dolores veritatis, non dolor vitae explicabo voluptate molestias tempore ...</NWBText>
                </MiddleWorkspaceBox>
                <MiddleWorkspaceBox>
                    <MWBBackgroundImage src="media/icons/calendar.png"/>
                    <NWBIcon src="media/icons/calendar.png"/>
                    <NWBTittle>Define the calendar</NWBTittle>
                    <NWBText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam architecto, dolores veritatis, non dolor vitae explicabo voluptate molestias tempore ...</NWBText>
                </MiddleWorkspaceBox>
            </MiddleWorkspaceBoxes>
            </MiddleWorkspace>
            <BottomWorkspace>
                <Posts/>
            </BottomWorkspace>
        </WorkspaceWrapper>
    )
}