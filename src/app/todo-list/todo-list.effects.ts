import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from "@ngrx/effects";
import { TodosActions } from './todo-list.actions';
import { TodoService } from './todo-list.service';

@Injectable()
export class TodosEffects {
    constructor(private action$: Actions,
                private todosActions: TodosActions,
                private todoService: TodoService) {
    }

    @Effect()
    fetchTodos$ = this.action$
        .ofType(TodosActions.FETCH_TODOS)
        .map((action: Action) => action.payload)
        .switchMap((query) => this.todoService.fetchTodos()
            .map((data: any) => this.todosActions.fetchTodosSuccess(data.data))
        );
}