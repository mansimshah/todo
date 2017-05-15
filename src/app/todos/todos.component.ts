import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos;	
	text;
	oldText;
	appState = 'default';
	todo = {"text": ""};
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  	this.todos = this._todoService.getTodos();
  }

	addTodo(){
		// var newTodo = {
		// 	text: this.text
		// }
		this.todos.push(this.todo);
		this._todoService.addTodo(this.todo);
		console.log("this.todos" + this.todos);
		this.todo = {"text": ""};
	}

	deleteTodo(todoText){
		for(var i=0;i < this.todos.length;i++){
			if(this.todos[i].text == todoText){
				this.todos.splice(i,1)
			}
		}
		this._todoService.deleteTodo(todoText);
	}

	editTodo(todo){
		this.appState = 'edit';
		console.log(this.appState);
		this.oldText = todo.text;
		this.todo = {"text": todo.text};
		this.text = todo.text;
	}

	updateTodo(){
		console.log(this.todo.text);
		for(var i=0;i < this.todos.length;i++){
			if(this.todos[i].text == this.oldText){
				this.todos[i].text = this.todo.text;
			}
		}
		this._todoService.updateTodo(this.oldText,this.todo.text);
		this.todo = {"text": ""};
	}

}