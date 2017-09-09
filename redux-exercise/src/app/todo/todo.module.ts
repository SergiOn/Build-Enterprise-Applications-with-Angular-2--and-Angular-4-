import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    DashboardComponent,
    TodoComponent
  ]
})
export class TodoModule { }
