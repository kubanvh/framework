import { ISingleTodos} from '../entities/todos';
import  * as actionTypes from '../actions/actionTypes/todosTypes';

export interface ITodosReducers {
    todosList: ISingleTodos[];
}

const defaultState = (): ITodosReducers => ({
    todosList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch(action.type) {
        case actionTypes.GET_TODOS: {
            const paylod: actionTypes.ITodosTypes['GET_TODOS'] = action;
            return {
                ...state,
                todosList: paylod.todosList
            }
        }
        default:{
            return state
        }
    }
};