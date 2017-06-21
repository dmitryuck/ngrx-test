import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  TodosStore,
  TodosActions,
  Todo
} from '../data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  public storeState: Observable<TodosStore>;

  constructor(public store: Store<TodosStore>) {
      this.storeState = store.select((a) => a);
  }

  ngOnInit() {
      this.storeState.subscribe((state: TodosStore) => {
        this.todos = state.todos;
      });
  }

  public addNewTodo(): void {
      let newTodo: Todo = new Todo('my first todo');
      this.store.dispatch(TodosActions.addTodo(newTodo));
  }
}
