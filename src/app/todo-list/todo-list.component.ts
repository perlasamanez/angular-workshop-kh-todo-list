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
  // todoItem: Item = {
  //   id: 1,
  //   description: 'Get people to sign up to the event.' 
  // };

  // Array to hold all the to-do items if it's strings
  //todoListItems: string[];
  //todoItem: string = '';

  // Array of items (object)
  todoListItems: Item[];
  todoItem: Item;
  // Id is just generated here for simple purposes - no relation
  id: number;

  constructor() {
   }

  ngOnInit() {
    // Initialize our values
    this.todoListItems = [];
    this.todoItem = {
      id: 0,
      description: ''
    }
    this.id = 0;
  }

  // Add function
  addItem(){
      this.todoListItems.push({
        id: this.id++,
        description: this.todoItem.description
      });
      // testing purposes to see that our array of items is being populated!
      console.log(this.todoListItems)
  }

  // Delete function
  deleteItem(i: number) {
    this.todoListItems.splice(i, 1);
    console.log(this.todoListItems)
  }
}
