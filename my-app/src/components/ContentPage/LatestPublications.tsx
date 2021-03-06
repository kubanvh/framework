import React, {FC} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';
import { IPostsReducers } from '../../reducers/postsReducers';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import {
    Link
} from "react-router-dom";
const LatestPublicationsWrapper = styled.div`
    background-color:${Colors.OldLavender};
    width:1200px;
    height:400px;
    margin: 30px;
    border: 5px solid ${Colors.Independence};
    margin-left:500px;
    border-radius:5px;
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
    margin-top:8px;
`;
const Text = styled.div`
    margin:5px;
    padding-top: 5px;
    width:600px;

    `;
const Text1 = styled.div`
    margin-left:430px;
    color: ${Colors.EnglishLavender};
`;
export const LatestPublications: FC = () => {
    const { usersList, photosList, postsList } = useSelector<IState, IUsersReducers & IPhotosReducers & IPostsReducers> (globalState => ({
        ...globalState.photos,
        ...globalState.users,
        ...globalState.posts
    }));
    return (
        <LatestPublicationsWrapper>
                <BigImageContainer>
                    <BigImage src={photosList[7]?photosList[7].thumbnailUrl:""}/>
                    <InnerWrapper>    
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing eliteaque porro ... */}
                            {postsList[3]?postsList[3].title:""}
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
                                <Text>{postsList[3]?postsList[3].body:""}</Text>
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
                                <Text>{postsList[1]?postsList[1].body:""}</Text>
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
                                <Text>{postsList[12]?postsList[12].body:""}</Text>
                            <PublicationDataRight>
                                <Date><h4>7 jan. 2020</h4></Date>
                                <AuthorPicture src={photosList[3]?photosList[3].thumbnailUrl:""}/>
                                <AuthorName><h4>{usersList?.[3]?.name}</h4></AuthorName>
                            </PublicationDataRight>
                        </InnerWrapperRight>
                    </Publication>
                </PublicationsContainer>
                <Text1>See more publications</Text1>      
        </LatestPublicationsWrapper>
    );
};