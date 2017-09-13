import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  addTodo() {
    const newTodo = { title: '... ' };
    this.service.addTodo(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  deleteTodo(id) {
    if (confirm('Are you sure?')) {
      this.service.deleteTodo(id).subscribe();
    }
  }
}
