import React, {FC} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import {
    Link
} from "react-router-dom";
const LatestPublicationsWrapper = styled.div`
    /* background-color:grey; */
    width:1200px;
    height:400px;
    margin: 30px;
    border: 3px solid #8596a1;
    -webkit-box-shadow: 0px 2px 8px 1px #000000; 
    box-shadow: 0px 2px 8px 1px #000000;
    margin-left:500px;
`;
const BigImageContainer = styled.div`
    float: left;
`;

const BigImage = styled.img`
    width:400px;
    height:400px;
`; 
const InnerWrapper = styled.div`
    width: 300px;
    position: absolute;
    padding-left: 15px;
    color: ${Colors.white};
    top: 400px;
    z-index: 100;
`;
const AuthorPicture = styled.img`
    width: 20px;
    border-radius: 50%;
    margin-left:15px;
    margin-right:15px;
    border: 1px solid black;
    height:20px;
`;
const Date = styled.div`
    float:left;
`;
const AuthorName = styled.div`
`;
const PublicationData = styled.div`
    margin-top:10px;
    display:flex;
`;
const PublicationsContainer = styled.div`
    margin:10px;
    margin-left:430px;
    display: flex;                    
    flex-direction: column;
    margin-top:20px;
`;
const Publication = styled.div`
    
`;
const PublicationImage = styled.img`
    width:80px;
    height:80px;
    float:left;
    margin-right: 10px;
`;

const Title = styled.div`
    padding-top:10px;
    padding-bottom:10px;
    padding-left:410px;
    font-size:22px;
`;
const InnerWrapperRight = styled.div`
    
`;
const PublicationDataRight = styled.div`
    display:flex;
    margin-top:20px;
`;
const Text = styled.div`
    margin:5px;
    padding-top: 5px;
    width:600px;

    `;
export const LatestPublications: FC = () => {
    const { usersList, photosList } = useSelector<IState, IUsersReducers & IPhotosReducers>(globalState => ({
        ...globalState.photos,
        ...globalState.users
    }));
    return (
        <LatestPublicationsWrapper>
                <BigImageContainer>
                    <BigImage src={photosList[2]?photosList[2].thumbnailUrl:""}/>
                    <InnerWrapper>    
                            Lorem ipsum dolor sit amet consectetur adipisicing eliteaque porro ...
                            <PublicationData>
                                <Date><h4>7 jan. 2020</h4></Date>
                                <AuthorPicture src={photosList[3]?photosList[3].thumbnailUrl:""}/>
                                <AuthorName><h4>{usersList?.[3]?.name}</h4></AuthorName>
                            </PublicationData>
                    </InnerWrapper>
                </BigImageContainer>
                    <Title>Latest publications</Title>
                <PublicationsContainer>
                    <Publication>
                        <InnerWrapperRight>
                            <PublicationImage src={photosList[5]?photosList[5].thumbnailUrl:""}/>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing eliteaque porro ... and one more line for the demo</Text>
                            <PublicationDataRight>
                                <Date><h4>7 jan. 2020</h4></Date>
                                <AuthorPicture src={photosList[5]?photosList[5].thumbnailUrl:""}/>
                                <AuthorName><h4>{usersList?.[5]?.name}</h4></AuthorName>
                            </PublicationDataRight>
                        </InnerWrapperRight>
                    </Publication>
                </PublicationsContainer>
                <PublicationsContainer>
                    <Publication>
                        <InnerWrapperRight>
                            <PublicationImage src={photosList[7]?photosList[7].thumbnailUrl:""}/>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing eliteaque porro ... and one more line for the demo</Text>
                            <PublicationDataRight>
                                <Date><h4>7 jan. 2020</h4></Date>
                                <AuthorPicture src={photosList[7]?photosList[7].thumbnailUrl:""}/>
                                <AuthorName><h4>{usersList?.[7]?.name}</h4></AuthorName>
                            </PublicationDataRight>
                        </InnerWrapperRight>
                    </Publication>
                </PublicationsContainer>
                <PublicationsContainer>
                    <Publication>
                        <InnerWrapperRight>
                            <PublicationImage src={photosList[2]?photosList[2].thumbnailUrl:""}/>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing eliteaque porro ... and one more line for the demo</Text>
                            <PublicationDataRight>
                                <Date><h4>7 jan. 2020</h4></Date>
                                <AuthorPicture src={photosList[3]?photosList[3].thumbnailUrl:""}/>
                                <AuthorName><h4>{usersList?.[3]?.name}</h4></AuthorName>
                            </PublicationDataRight>
                        </InnerWrapperRight>
                    </Publication>
                </PublicationsContainer>
        </LatestPublicationsWrapper>
    );
};