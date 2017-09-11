import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() completeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() { }

  onComplete() {
    this.completeTodo.emit(this.todo);
  }

  onDelete() {
    this.removeTodo.emit(this.todo);
  }
}
