import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from './todo-list.reducer';
import { TodosActions } from './todo-list.actions';
import { Todo } from './todo/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Observable<Todo[]>;
  public storeState: Observable<TodosState>;

  constructor(public store: Store<TodosState>) {
      this.storeState = store.select((a) => a);
  }

  ngOnInit() {
      this.todos = this.storeState.map(state => state.todos);
  }

  public addNewTodo(): void {
      this.store.dispatch(TodosActions.addTodo(new Todo('Todo')));
  }

  public fetchTodos(): void {
    this.store.dispatch(TodosActions.fetchTodos());
  }
}
