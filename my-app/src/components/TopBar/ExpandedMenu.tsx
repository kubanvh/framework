import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';

import {
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';


const ExpandedMenuWrapper = styled.div`
    margin-top:30px;
    margin-left:200px;
    width: 200px;
    border: 1px solid grey;
    position:fixed;

`;

const ExpandedMenuContent = styled.div`
    margin-top:10px;
    margin-left:10px;
    font-family: Arial Bold;
    font-size:15px;
`;

const MenuItem = styled.div`
    margin-top:10px;
    margin-right:10px;
    padding-left: 5px;
    &hover{
        background-color:grey;
    }
`;

const NewSection = styled.p`
    padding-left: 5px;
    color:gray;
    margin-top:10px;
    margin:3px;
    margin-top:5px;

`;
const ItemLink = styled.div`
    margin-left:-10px;
    height: 0.5px;
    width: 200px;
    background-color: gray;
    display:flex;
`;
const Logout = styled.div`
    text-align: center;
    padding: 10px;
    color:gray;
`;

const Scroll = styled.div`
    height:auto;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
`;

const ProfilePicture = styled.img`
`;

const UserName = styled.img`
`;
export const ExpandedMenu: FC = () => {
    const { usersList, photosList } = useSelector<IState, IUsersReducers & IPhotosReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }))
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
    }
    return(
        <ExpandedMenuWrapper>
            <ExpandedMenuContent>
                <input className="filter" type="text"  value={inputText} onChange={inputHandler} placeholder="Filter..."/>
                <Scroll>
                {'Platform'.toLowerCase().includes(inputText.toLowerCase()) && 
                <NewSection> Platform </NewSection>}
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/house.png" alt="" />
                <Link to="/home">Home</Link> 
                </MenuItem>}
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/publications.png" alt="" />
                <Link to="/publications">Publications</Link> 
                </MenuItem>}
                {'People'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/people.png" alt="" /> 
                <Link to="/people">People</Link>
                </MenuItem>}
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/entities.png" alt="" /> 
                <Link to="/entities">Entities</Link>
                </MenuItem>}
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/administration.png" alt="" />
                <Link to="/administration">Administration</Link>
                </MenuItem>}
                {'Workspacess'.toLowerCase().includes(inputText.toLowerCase()) &&
                <NewSection> Workspacess </NewSection>}
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/contract.png" alt=""/>
                <Link to="/contract"> Client contract</Link>
                </MenuItem>}
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/entities2.png" alt=""/> 
                <Link to="/etities"> Corporate</Link>
                </MenuItem>}
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/book.png" alt=""/>
                <Link to="/groupNorms"> Group Norms</Link>
                </MenuItem>}
                {'Real estate contract'.toLowerCase().includes(inputText.toLowerCase()) && 
                <MenuItem>
                <img src="./media/icons/contract.png" alt=""/>
                <Link to="/contract">Real estate contract </Link>
                </MenuItem>}
                </Scroll>
                <div className="newsection"></div>
                <ItemLink></ItemLink>
                <NewSection>Account</NewSection>
                <MenuItem>
                <ProfilePicture src={photosList[1]?photosList[1].thumbnailUrl:""}/>
                <UserName>
                {usersList[0]?usersList[0].name:""}
                </UserName>
                </MenuItem>
                <MenuItem>
                <img src="./media/icons/privacy.png" alt=""/>
                <Link to="/privacy">Privacy</Link>
                </MenuItem>
                <MenuItem>
                <img src="./media/icons/settings.png" alt=""/>
                <Link to="/settings">Settings</Link>
                </MenuItem>
                <ItemLink></ItemLink>
                <Logout>
                <img src="./Media/icons/logout.png" alt=""/>
                </Logout>
            </ExpandedMenuContent>
        </ExpandedMenuWrapper>
    );
};