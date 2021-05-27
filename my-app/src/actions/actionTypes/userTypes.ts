import { ISingleUser} from '../../entities/users';
export const GET_USERS = 'Get_USERS';

export interface IUserTypes {
    GET_USERS:{
        usersList: ISingleUser[];
    }
}