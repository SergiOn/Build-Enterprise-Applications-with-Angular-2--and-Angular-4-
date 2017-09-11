import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  @select(['todo', 'lastUpdate']) lastUpdate;
  @select(t => t.todo.todos.toJS()) todos;
  @select(t => t.todo.todos.toJS().length) todoLength;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodos() {
    let arrTodos = [];
    this.todos.subscribe(t => arrTodos = t || []);
    this.todoService.deleteTodos(arrTodos);
  }

}
