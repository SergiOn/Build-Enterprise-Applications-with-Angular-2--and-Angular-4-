import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @select(['todo', 'isFetching']) isFetching;

  constructor() { }

  ngOnInit() {
  }

}
