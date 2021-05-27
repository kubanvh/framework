import { ISinglePost} from '../../entities/posts';
export const GET_POSTS = 'Get_Post';

export interface IPostTypes {
    GET_POSTS:{
        postsList: ISinglePost[];
    }
}