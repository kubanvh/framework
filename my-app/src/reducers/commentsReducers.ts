import { ISingleComment} from '../entities/comments';
import  * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentsReducers {
    commentsList: ISingleComment[];
}

const defaultState = (): ICommentsReducers => ({
    commentsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_COMMENTS: {
            const paylod: actionTypes.ICommentsTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: paylod.commentsList
            }
        }
        default:{
            return state
        }
    }
};