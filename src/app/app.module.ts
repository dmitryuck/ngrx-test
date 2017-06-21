import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import {
  TodoListComponent,
  TodoComponent
} from './todo-list';

import {
  todosReducer
} from './data';

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
    StoreModule.provideStore(todosReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
