import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {
  name: string;
  password: string;

  @Input() dataForm: any = {
    listUser: [
      {name: 'Sélectionner un type de compte'},
      {name: 'Super User',  value: 'superUser'},
      {name: 'Chef Atelier', value: 'chefAtelier'},
      {name: 'Velospotter', value: 'velospotter'}
    ],
    listNetwork: [
      {name: 'Sélectionner un réseau'},
      {name: 'Bienne'},
      {name: 'Fribourg'},
      {name: 'Genève'}
    ],
    createdAccount: {
      name: '',
      password: ''
    }
  };

  constructor() { }

  createAccount(name, password) {
    this.name = name;
    this.password = password;
    /*TODO: ajouter type de compte et réseau*/
  }

  ngOnInit() {
  }

}
