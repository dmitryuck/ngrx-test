import { ActionReducer, Action } from '@ngrx/store';
import { TodosStore } from './todos.store';
import { Todo } from './todo';
import { TodosActions } from './todos.actions';

export const defaultState: TodosStore = {
    todos: []
}

export const todosReducer: ActionReducer<TodosStore> = (state: TodosStore = defaultState, action: Action) => {
    let newTodosArray: any[] = [... state.todos];

    switch (action.type) {
        case TodosActions.ADD_TODO.toString():
            newTodosArray.push(action.payload);

            return Object.assign({}, state, {todos: newTodosArray});

        case TodosActions.REM_TODO.toString():
            newTodosArray.splice(newTodosArray.indexOf(action.payload), 1);

            return Object.assign({}, state, {todos: newTodosArray});

        case TodosActions.SET_DONE.toString():
            let done: boolean = action.payload.done;
            let setDoneTodo: Todo = action.payload.todo;

            let targetSetDoneTodo: Todo = newTodosArray.find((todo)=>todo.id === setDoneTodo.id);
            targetSetDoneTodo.done = done;

            return Object.assign({}, state, {todos: newTodosArray});

        case TodosActions.SET_NAME.toString():
            let name: string = action.payload.name;
            let setNameTodo: Todo = action.payload.todo;

            let targetSetNameTodo: Todo = newTodosArray.find((todo)=>todo.id === setNameTodo.id);
            targetSetNameTodo.name = name;

            return Object.assign({}, state, {todos: newTodosArray});

        default:
            return state;
    }
}

