import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-manager-form',
  templateUrl: './create-manager-form.component.html',
  styleUrls: ['./create-manager-form.component.css']
})
export class CreateManagerFormComponent implements OnInit {

  managerName: string;
  email: string;
  password: string;
  password2: string;

  data: any = {};

  constructor() { }

  // createManager(managerName, email, password, password2) {
  //   this.data.push(managerName, email, password, password2)
  //   this.managerName = managerName;
  //   this.email = email;
  //   this.password = password;
  //   this.password2 = password2;
  //   /*TODO check password et password2 si idem valide création compte*/
  //   /*TODO route vers page*/
  // }

  ngOnInit() {
  }

}
