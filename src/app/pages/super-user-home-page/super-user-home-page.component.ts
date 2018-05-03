import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-user-home-page',
  templateUrl: './super-user-home-page.component.html',
  styleUrls: ['./super-user-home-page.component.css']
})
export class SuperUserHomePageComponent implements OnInit {

  colTitles = ['Réseau', 'Nom', 'Type', 'Actions'];

  data: any = {
    listAccounts: [
      ['-', 'Bob', 'Superuser', {edit: true}],
      ['Bienne', 'Bob', 'Chef Atelier', {edit: true}],
      ['Bienne', 'Equipe A', 'Velospotter', {edit: true}],
      ['Bienne', 'Equipe B', 'Velospotter', {edit: true}],
      ['Fribourg', 'Paul', 'Chef Atelier', {edit: true}],
      ['Fribourg', 'Equipe Alpha', 'Velospotter', {edit: true}],
      ['Fribourg', 'Equipe Beta', 'Velospotter', {edit: true}],
      ['Genève', 'Jacques', 'Chef Atelier', {edit: true}],
      ['Genève', 'Equipe 1', 'Velospotter', {edit: true}],
      ['Genève', 'Equipe 2', 'Velospotter', {edit: true}],
      ['Genève', 'Equipe 3', 'Velospotter', {edit: true}]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
