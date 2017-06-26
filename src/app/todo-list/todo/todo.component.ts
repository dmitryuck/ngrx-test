import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Todo } from './todo';
import { TodosState } from '../todo-list.reducer';
import { TodosActions } from '../todo-list.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, AfterViewChecked {
  @Input()
  public todo: Todo;

  @ViewChild('inputName')
  public inputName: ElementRef;

  public storeState: Observable<TodosState>;

  public editMode: boolean;

  constructor(public store: Store<TodosState>) {
    this.storeState = store.select(a => a);
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if(this.inputName) {
      this.inputName.nativeElement.focus();
    }
  }

  public deleteTodo(todo: Todo): void {
    this.store.dispatch(TodosActions.removeTodo(todo));
  }

  public setDone(done: boolean): void {
    this.store.dispatch(TodosActions.setDone(this.todo, done));
  }

  public enterEditMode(): void {
    this.editMode = true;
  }

  public inputBlur(): void {
    this.editMode = false;
  }

  public editKeyDown(event: any): void {
    if(event.keyCode === 13) {
      let newName: string = this.inputName.nativeElement.value;

      this.store.dispatch(TodosActions.setName(this.todo, newName));

      this.editMode = false;
    }

    if(event.keyCode === 27) {
      this.editMode = false;
    }
  }
}
