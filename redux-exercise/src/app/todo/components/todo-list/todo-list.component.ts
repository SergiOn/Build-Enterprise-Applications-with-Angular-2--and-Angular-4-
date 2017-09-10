import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../../root.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ngRedux: NgRedux<IAppState>
  ) {
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

    this.ngRedux.dispatch({type: 'ADD_TODO'});

    console.log(this.form.get('name').value);

    this.form.reset();
  }
}
