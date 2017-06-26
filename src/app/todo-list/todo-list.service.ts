import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo/todo';

@Injectable()
export class TodoService {
  public constructor() {}

  public fetchTodos(): Observable<any> {
    return  Observable.timer(1000).mapTo({data: new Todo('Todo from EFFECT')});
  }
}
