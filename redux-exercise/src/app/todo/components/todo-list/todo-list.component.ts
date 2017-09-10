import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addTodo() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.get('name').value);

    this.form.reset();
  }
}
