import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  title ='GEVELISP';
  username: string;
  password: string;

  data: any = {};

  constructor() { }

  onLogin(username, password) {
    this.username = username;
    this.password = password;
    /* TODO: route to page*/
  }

  ngOnInit() {
  }

}
