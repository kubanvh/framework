import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';
import { ICommentsReducers } from '../../reducers/commentsReducers';

import {
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';


const PostsWrapper = styled.div`
    margin-top:50px;
    float:left;
    
`;
const TopPost = styled.div`
`;

const Text = styled.div`
    margin-left:520px;
    font-size:22px;
    float:left;
    color:${Colors.Independence};
    font-weight: 700;
`;
const InputSearchBar = styled.input`
    float: left;
    margin-left: 450px;
`;
const SinglePost = styled.div`
    float:left;
    margin-top: 30px;
    background-color:${Colors.EnglishLavender};
    height:120px;
    width:1100px;
    margin-left:500px;
    border: 4px solid ${Colors.Independence};
    border-radius:6px;
`;
const SinglePostTittle = styled.div`
    font-size:18px;
    margin:10px;
    color:${Colors.Independence};
    font-weight: 700;
`;
const PostText = styled.div`
    margin:15px;
`;
const BottomPost = styled.div`
float:left;
display:flex;
margin-left:15px;
`;
const CorpIcon = styled.img`
    margin-right:15px;
`;
const TextCorp = styled.div`
    margin-right:15px;
 `;
const PostIcon = styled.img`
    margin-right:15px;
    margin-top:-5px;
 `;
const TextPostIcon = styled.div`
    margin-right:15px;
 `;
const Timeline = styled.div`
`;
const RighTop = styled.div`
    float:left;
    margin-left:50px;
`;
const AntennaIcon = styled.img`
    width:20px;
    float:left;
`;
const RightText = styled.div`
    float:left;
    margin-left:20px;
    color:${Colors.Independence};
`;
const DownCrossIcon = styled.img`
    float:left;
    margin-left:20px;
`;
export const Posts: FC = () => {
    // const { usersList, photosList, commentsList } = useSelector<IState, IUsersReducers & IPhotosReducers & ICommentsReducers>(globalState => ({
    //     ...globalState.users,
    //     ...globalState.photos,
    //     ...globalState.comments
    // }));
    const commentsList = useSelector<IState & ICommentsReducers>(globalState => ({
        ...globalState.comments,
    }));
    
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
    }
    return (
        <PostsWrapper>
            <TopPost>
                <Text>Resume your work</Text>
                <InputSearchBar className="filter" type="text"  value={inputText} onChange={inputHandler} placeholder="Filter..."/>
                <RighTop>
                    <AntennaIcon src="./media/icons/antenna.png"/>
                    <RightText>Followed</RightText>
                    <DownCrossIcon src="./media/icons/arrow-down.png"/>
                </RighTop>
            </TopPost>
            {'World company SAS'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>World company SAS</SinglePostTittle>
            <PostText>
            {/* {commentsList[2]?commentsList[2].name:""} */}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/entities.png"/>
                <TextPostIcon>Corporate</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
            }
            {'Contract #145'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>Contract #145</SinglePostTittle>
            <PostText>
                {}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/contract.png"/>
                <TextPostIcon>Supplier contract</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
            }
            {'Contract #145'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>Contract #145</SinglePostTittle>
            <PostText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/contract.png"/>
                <TextPostIcon>Client contract</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
            }
            {'Contract #145'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>Contract #145</SinglePostTittle>
            <PostText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/contract.png"/>
                <TextPostIcon>Client contract</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
            }
            {'World company SAS'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>World company SAS</SinglePostTittle>
            <PostText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/entities.png"/>
                <TextPostIcon>Corporate</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
        }
            {'World company SAS'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>World company SAS</SinglePostTittle>
            <PostText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/entities.png"/>
                <TextPostIcon>Corporate</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
        }
            {'World company SAS'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())&&
        <SinglePost>
            <SinglePostTittle>World company SAS</SinglePostTittle>
            <PostText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos, soluta, alias dolores voluptatem ipsa harum atque assumenda at quia explicabo vero. Porro fugit rem enim facilis vel est nisi?
            </PostText>
            <BottomPost>
                <CorpIcon src=".media/icons/logo.png"/>
                <TextCorp>Subsid.corp</TextCorp>
                <PostIcon src="./media/icons/entities.png"/>
                <TextPostIcon>Corporate</TextPostIcon>
                <Timeline>Updated 3 days ago by John Doe</Timeline>
            </BottomPost>
        </SinglePost>
            }
        </PostsWrapper>
    )
}