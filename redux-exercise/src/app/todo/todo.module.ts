import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './services/todo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    DashboardComponent,
    TodoComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
