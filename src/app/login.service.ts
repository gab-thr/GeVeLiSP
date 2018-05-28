import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { NavbarService} from './navbar.service';

export class User {
  constructor(
    public username: string,
    public password: string
  ) {}
}

const users = [
  new User('superuser', 'superuser'),
  new User('chefatelier', 'chefatelier'),
  new User('velospotter', 'velospotter')
];

@Injectable()
export class LoginService {

  constructor(private _router: Router, public nav: NavbarService) { }

  login(user) {
    const authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      if (authenticatedUser.username === 'chefatelier') {
        this._router.navigate(['/home']);
        this.nav.showCA();
      } else if (authenticatedUser.username === 'superuser') {
        this._router.navigate(['/superUserHome']);
        this.nav.showSU();
      } else if (authenticatedUser.username === 'velospotter') {
        this._router.navigate(['/velospotterHome']);
        this.nav.showVS();
      }
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['/login']);
    }
  }


}
