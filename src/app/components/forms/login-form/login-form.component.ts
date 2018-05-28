import { Component, Input, OnInit } from '@angular/core';
import { LoginService, User } from '../../../login.service';
import { NavbarService } from '../../../navbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public user = new User('', '' );
  public errorMsg = '';

  title ='GEVELISP';
  // username: string;
  // u1 = 'superuser';
  // password: string;
  //
  // @Input() show;
  //
  // data: any = {
  //   show: this.show
  // };
  //
  // constructor() { }
  //
  // onLogin(username) {
  //   this.username = username;
  //   // this.password = password;
  //   if (username === this.u1) {
  //     this.data.show = true;
  //   }
  // }
  //
  ngOnInit() {

  }


  constructor(
    private _service: LoginService, public nav: NavbarService) {
    nav.hideCA();
    nav.hideSU();
    nav.hideVS();
  }

  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }

}
