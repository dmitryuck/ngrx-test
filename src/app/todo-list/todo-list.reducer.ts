import { Action } from '@ngrx/store';
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

        case TodosActions.REMOVE_TODO: {
            return Object.assign({}, state, {todos: state.todos.filter((todo: Todo) => todo !== action.payload as Todo)});
        }

        case TodosActions.SET_DONE: {
            const {done, todo} = action.payload;

            const doneTodo: Todo = Object.assign({}, state.todos.find((currentTodo: Todo) => currentTodo.id === todo.id), {done});

            return Object.assign({}, state, {todos: state.todos.map(currentTodo => currentTodo.id === todo.id ? doneTodo : currentTodo)});
        }

        case TodosActions.SET_NAME: {
            const {todo, name} = action.payload;

            const renamedTodo: Todo = Object.assign({},  state.todos.find((currentTodo: Todo) => currentTodo.id === todo.id), {name});

            return Object.assign({}, state, {todos: state.todos.map(currentTodo => currentTodo.id === todo.id ? renamedTodo : currentTodo)});
        }

        case TodosActions.FETCH_TODOS_SUCCESS: {
            return Object.assign({}, state, {todos: [... state.todos, ... action.payload]});
        }

        default:
            return state;
    }
}
