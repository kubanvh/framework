import { combineReducers } from 'redux';

import users, { IUsersReducers } from './usersReducers';
import photos, { IPhotosReducers } from './photosReducers'
import todos, { ITodosReducers } from './todosReducers';
import posts, { IPostsReducers} from './postsReducers';
import comments, {ICommentsReducers } from './commentsReducers'

export default combineReducers({
    users,
    photos,
    todos,
    posts,
    comments

})

export interface IState {
    users: IUsersReducers;
    photos: IPhotosReducers;
    todos: ITodosReducers;
    posts: IPostsReducers;
    comments: ICommentsReducers;
}