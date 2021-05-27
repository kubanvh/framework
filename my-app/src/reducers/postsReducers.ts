import { ISinglePost} from '../entities/posts';
import  * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostsReducers {
    postsList: ISinglePost[];
}

const defaultState = (): IPostsReducers => ({
    postsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_POSTS: {
            const paylod: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: paylod.postsList
            }
        }
        default:{
            return state
        }
    }
};