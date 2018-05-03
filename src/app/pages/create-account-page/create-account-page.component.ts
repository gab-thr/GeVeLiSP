import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.css']
})
export class CreateAccountPageComponent implements OnInit {

  @Input() data: any = {
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

  ngOnInit() {
  }

}
