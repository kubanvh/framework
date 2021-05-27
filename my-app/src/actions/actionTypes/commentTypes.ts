import { ISingleComment} from '../../entities/comments';
export const GET_COMMENTS = 'Get_COMMENTS';

export interface ICommentsTypes {
    GET_COMMENTS:{
        commentsList: ISingleComment[];
    }
}   