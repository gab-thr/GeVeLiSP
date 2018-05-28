import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  colTitles = ['Nom', 'Capacité du véhicule', 'ID Cartes', 'Mission en cours', 'En service', ''];

  data: any = {
    tab: [
      ['Equipe A', 3, 457322, '-', {value: true}, {delete: true}],
      ['Equipe B', 5, 784265, 'Mission 74',  {value: false}, {delete: true}],
      ['Equipe C', 11, 112457, 'Mission 12',  {value: true}, {delete: true}]
    ],
    createdTeam: {
      teamName: '',
      cardID: '',
      capacity: '',
      password: ''
    },
    hide: false
  };

  addAccount() {
    this.data.hide = true;
  }

  createTeam() {
    this.data.hide = false;
    this.data.tab.push([
      this.data.createdTeam.teamName,
      this.data.createdTeam.capacity,
      this.data.createdTeam.cardID,
      '-',
      {value: false},
      {delete: true}
    ]);
  }

  deleteTeam(team) {
    this.data.splice(this.data.indexOf(team), 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
