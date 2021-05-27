import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/todosTypes';
import { ISingleTodos } from '../entities/todos';

export const getTodos = (): Promise<ISingleTodos[]> => ((dispatch: Dispatch) => {
    
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((todosList: ISingleTodos[]) => {
            dispatch({
                type: actionTypes.GET_TODOS,
                todosList
            })
        })
}) as any; 