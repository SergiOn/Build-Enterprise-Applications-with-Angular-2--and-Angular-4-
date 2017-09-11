import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select } from 'ng2-redux';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  form: FormGroup;
  @select() todo;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) {
    this.form = fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.todoService.loadTodos();
  }

  addTodo() {
    if (!this.form.valid) {
      return;
    }

    const todo = new Todo(this.form.get('title').value);
    this.todoService.addTodo(todo);

    this.form.reset();
  }
}
