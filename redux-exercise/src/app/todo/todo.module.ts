import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './services/todo.service';
import { LoaderComponent } from '../components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDashboardComponent,
    TodoComponent
  ],
  providers: [
    TodoService
  ],
  exports: [
    TodoComponent,
    LoaderComponent
  ]
})
export class TodoModule { }
