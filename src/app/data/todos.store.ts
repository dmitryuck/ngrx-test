import { combineReducers } from '@ngrx/store';

import { Todo } from './todo';
import { todosReducer } from './todos.reducer';

export interface TodosStore {
    todos: Todo[];
}
