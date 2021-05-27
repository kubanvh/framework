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

import { getUsers } from '../../actions/userActions';
import { getPhotos } from '../../actions/photosActions';
import { getTodos } from '../../actions/todosActions';
import { getPosts} from '../../actions/postActions';
import { getComments } from '../../actions/commentsActions';

import { type } from 'node:os';

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetTodos = ReturnType<typeof getTodos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const Wrapper = styled.div` `;

const Content = styled.div`
    max-width: 1600px;
    /* align-items: center; */
    /* display: flex; */
    /* background-color:#574e4e; */
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
                    <Content>
                    <LeftMenu />
                    <LatestPublications/>
                    <SimpleSlider/>
                    <Switch>
                        <Route path="/mainPage">
                        <LatestPublications/>
                        </Route>
                        <Route path="/publications">
                            publications
                        </Route>
                        <Route path="/ecosystem">
                            ecosystem
                        </Route>
                        <Route path="/entities">
                            entities
                        </Route>
                        <Route path="/home">
                            home
                        </Route>
                        <Route path="/people">
                            People
                        </Route>
                        <Route path="/contract">
                            Contract
                        </Route>
                        <Route path="/groupNorms">
                            Group Norms
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Router>
    );
};
export default MainPage;