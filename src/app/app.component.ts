import { Component } from '@angular/core';
import {LoginFormComponent} from './components/forms/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show =  false;
}
