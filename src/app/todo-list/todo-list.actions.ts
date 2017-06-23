import { Action } from '@ngrx/store';

import { Todo } from './todo/todo';

export class TodosActions {
    public static ADD_TODO: string = 'ADD_TODO';
    static addTodo(todo: Todo): Action {
        return {
            type: TodosActions.ADD_TODO,
            payload: todo
        };
    }

    public static REM_TODO: string = 'REM_TODO';
    static remTodo(todo: Todo): Action {
        return {
            type: TodosActions.REM_TODO,
            payload: todo
        };
    }

    public static SET_DONE: string = 'SET_DONE';
    static setDone(todo: Todo, done: boolean): Action {
        return {
            type: TodosActions.SET_DONE,
            payload: {todo: todo, done: done}
        };
    }

    public static SET_NAME: string = 'SET_NAME';
    static setName(todo: Todo, name: string): Action {
        return {
            type: TodosActions.SET_NAME,
            payload: {todo: todo, name: name}
        }
    }
 }
