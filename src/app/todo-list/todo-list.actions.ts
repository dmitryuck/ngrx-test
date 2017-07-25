import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Todo } from './todo/todo';

@Injectable()
export class TodosActions {
    public static ADD_TODO: string = 'ADD_TODO';
    static addTodo(todo: Todo): Action {
        return {
            type: TodosActions.ADD_TODO,
            payload: todo
        };
    }

    public static REMOVE_TODO: string = 'REMOVE_TODO';
    static removeTodo(todo: Todo): Action {
        return {
            type: TodosActions.REMOVE_TODO,
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

    public static FETCH_TODOS: string = 'FETCH_TODOS';
    static fetchTodos(): Action {
        return {
            type: TodosActions.FETCH_TODOS
        };
    }

    public static FETCH_TODOS_SUCCESS: string = 'FETCH_TODOS_SUCCESS';
    fetchTodosSuccess(data: Todo): Action {
        return {
            type: TodosActions.FETCH_TODOS_SUCCESS,
            payload: data
        };
    }
 }
