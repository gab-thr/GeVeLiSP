import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-velo-spotter-home-page',
  templateUrl: './velo-spotter-home-page.component.html',
  styleUrls: ['./velo-spotter-home-page.component.css']
})
export class VeloSpotterHomePageComponent implements OnInit {

  capacityMax = 3;
  cardID = 547168;

  colWaitTitles = ['MissionID', 'Type', 'Equipe', 'Zone', 'Durée estimée', '#vélos initiaux', 'Accepter'];
  colTitles = ['Mission ID', 'Type', 'Equipe', 'Zone', 'Complétion(durée restante approx.)', 'débutée à'];

  data = {
    listZone: [
      {name: 'Sélectionner une zone'},
      {name: 'Zone A', value: 'zoneA'},
      {name: 'Zone B', value: 'zoneB'},
      {name: 'Zone C', value: 'zoneC'},
      {name: 'Zone D', value: 'zoneD'}
    ],
    tab1: [
      ['1', 'Standard', 'Equipe B', '-', '50% (60 min)', '9:12']
    ],
    tab2: [
      [84, 'Urgente', 'Equipe C', 'Zone C', '2h', '2', {okBtn: false}]
    ],
    capacityMax: 3,
    cardsID: [
      547168, 46715, 13645
    ]

  };



  constructor() { }

  ngOnInit() {
  }

}
