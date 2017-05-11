import { Component,NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations: [ TodosComponent ]
})

export class AppComponent {
  title = 'app works!';
}