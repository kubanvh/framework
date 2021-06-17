import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
// import { Wrapper } from '../../styledHelpers/Components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { LatestPublications } from '../ContentPage/LatestPublications';
import { SimpleSlider } from '../ContentPage/Slider';
import { Posts } from '../ContentPage/Posts';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { Workspace } from '../Workspace/Workspace';
import { Entities } from '../Entities/Entities';
import { Profile } from '../Profile/Profile';

import { getUsers } from '../../actions/userActions';
import { getPhotos } from '../../actions/photosActions';
import { getTodos } from '../../actions/todosActions';
import { getPosts} from '../../actions/postActions';
import { getComments } from '../../actions/commentsActions';

import { Colors } from '../../styledHelpers/Colors';

import { type } from 'node:os';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetTodos = ReturnType<typeof getTodos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const Wrapper = styled.div`
background-color:ghostwhite;
 `;

const Content = styled.div`
    height:100%;
    max-width: 1600px;
/* background-color:${Colors.OldLavender}; */
    /* align-items: center; */
    /* display: flex; */
`;
const MainPage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetTodos>(getTodos());
        dispatch<GetPosts>(getPosts());
        dispatch<GetComments>(getComments());
    }, []);
    return ( 
        <Router>
            <Wrapper>
                <TopBar/>
                    <LeftMenu />
                    <Switch>
                        <Route path="/mainPage">
                            <Content>
                                <LatestPublications/>
                                <SimpleSlider/>
                                <Posts/>
                            </Content>    
                        </Route>
                        <Route path="/publications">
                            <ErrorPage/>
                        </Route>
                        <Route path="/ecosystem">
                            <ErrorPage/>
                        </Route>
                        <Route path="/entities">
                            <Entities/>
                        </Route>
                        <Route path="/home">
                            <ErrorPage/>
                        </Route>
                        <Route path="/people">
                            <ErrorPage/>
                        </Route>
                        <Route path="/contract">
                            <ErrorPage/>
                        </Route>
                        <Route path="/groupNorms">
                            <ErrorPage/>
                        </Route>
                        <Route path="/workspace">
                            <Workspace />
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                    </Switch>
            </Wrapper>
        </Router>
    );
};
export default MainPage;