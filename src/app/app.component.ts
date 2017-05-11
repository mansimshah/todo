import { Component,NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoService ]
})

@NgModule({
  declarations: [ TodosComponent ]
})

export class AppComponent {
  title = 'app works!';
}