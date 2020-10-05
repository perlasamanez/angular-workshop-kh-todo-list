import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Quick Example of Data Binding
  //todoItem = 'Get people to sign up to the event.';

  // 2nd Example of an item with an interface and how to display this object
  todoItem: Item = {
    id: 1,
    description: 'Get people to sign up to the event.' 
  };

  // Array to hold all the to-do items
  todoList = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Add function

  // Delete function
}
