import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../login.service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {

  constructor(public user: LoginService) { }

  ngOnInit() {
  }

}
