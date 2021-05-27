import { ISinglePhoto} from '../entities/photos';
import  * as actionTypes from '../actions/actionTypes/photosTypes';

export interface IPhotosReducers {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotosReducers => ({
    photosList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_PHOTOS: {
            const paylod: actionTypes.IPhotosTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: paylod.photosList
            }
        }
        default:{
            return state
        }
    }
};