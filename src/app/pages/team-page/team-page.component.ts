import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  colTitles = ['Nom', 'Capacité du véhicule', 'ID Cartes', 'Mission en cours', 'En service'];

  data: any = {
    tab: [
      ['Equipe A', 3, 457322, '-', {value: true}],
      ['Equipe B', 5, 784265, 'Mission 74',  {value: false}],
      ['Equipe C', 11, 112457, 'Mission 12',  {value: true}]
    ],
    createdTeam: {
      teamName: '',
      cardID: '',
      capacity: '',
      password: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
