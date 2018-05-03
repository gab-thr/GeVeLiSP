import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mission-request-page',
  templateUrl: './mission-request-page.component.html',
  styleUrls: ['./mission-request-page.component.css']
})
export class MissionRequestPageComponent implements OnInit {

  colTitles = ['Nom', 'Capacité du véhicule', '#vélos initial', 'Mission en cours', 'Sélectionnée'];

  @Input() data = {
    tab1: [
      ['Equipe A', 3, 0, '-', {value: true}],
      ['Equipe B', 5, 0, '-',  {value: false}],
      ['Equipe C', 11, 0, 'Mission 12',  {value: true}],
    ],
    missionAmount: 3
  };

  constructor() { }

  ngOnInit() {
  }

}
