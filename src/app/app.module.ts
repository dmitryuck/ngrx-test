import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodosActions } from './todo-list/todo-list.actions';
import { TodosEffects } from './todo-list/todo-list.effects';
import { TodoService } from './todo-list/todo-list.service';

import { AppComponent } from './app.component';

import {
  TodoListComponent,
  TodoComponent
} from './todo-list';

import {
  todosReducer
} from './todo-list/todo-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(TodosEffects),
    StoreModule.provideStore(todosReducer)
  ],
  providers: [
    TodosActions,
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
