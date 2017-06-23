import { ActionReducer, Action } from '@ngrx/store';
import { Todo } from './todo/todo';
import { TodosActions } from './todo-list.actions';

export interface TodosState {
    todos: Todo[];
}

export const defaultState: TodosState = {
    todos: []
}

export function todosReducer(state: TodosState = defaultState, action: Action): TodosState {
    switch (action.type) {
        case TodosActions.ADD_TODO: {
            return Object.assign({}, state, {todos: [... state.todos, action.payload]});
        }

        case TodosActions.REM_TODO: {
            return Object.assign({}, state, {todos: state.todos.filter((todo: Todo) => todo !== action.payload as Todo)});
        }

        case TodosActions.SET_DONE: {
            const {done, todo} = action.payload;

            const targetTodoClone: Todo = Object.assign({}, state.todos.find((currentTodo: Todo) => currentTodo.id === todo.id), {done});

            return Object.assign({}, state, {todos: state.todos.map(currentTodo => currentTodo.id === todo.id ? targetTodoClone : currentTodo)});
        }

        case TodosActions.SET_NAME: {
            const {todo, name} = action.payload;

            const targetTodoClone: Todo = Object.assign({},  state.todos.find((currentTodo: Todo) => currentTodo.id === todo.id), {name});

            return Object.assign({}, state, {todos: state.todos.map(currentTodo => currentTodo.id === todo.id ? targetTodoClone : currentTodo)});
        }

        default:
            return state;
    }
}

