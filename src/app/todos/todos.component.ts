import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos;	
	text;
  constructor() { }

  ngOnInit() {
  	this.todos = [
  		{
  			text: "Todo One"
  		},
  		{
  			text: "Todo Two"
  		},
  		{
  			text: "Todo Three"
  		}
  	]
  }

	addTodo(){
		console.log(this.text);
		this.todos.push({
			text: this.text
		})
	}

	deleteTodo(todoText){
		for(var i=0;i < this.todos.length;i++){
			if(this.todos[i].text == todoText){
				this.todos.splice(i,1)
			}
		}
	}

}