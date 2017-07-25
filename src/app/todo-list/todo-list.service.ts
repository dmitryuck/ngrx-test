import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo/todo';

@Injectable()
export class TodoService {
  public constructor() {}

  public fetchTodos(): Observable<{data: Todo[]}> {
    return  Observable.timer(1000).mapTo({data: [new Todo('Todo from EFFECT 1'), new Todo('Todo from EFFECT 2'), new Todo('Todo from EFFECT 3')]});
  }
}
