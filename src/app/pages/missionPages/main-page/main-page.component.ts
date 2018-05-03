import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  colTab1 = ['Mission ID', 'Type', 'Equipe', 'Zone', 'Complétion(durée restante approx.)', 'débutée à'];

  colTitles = ['MissionID', 'Type', 'Equipe', 'Zone', 'Durée estimée', '#vélos initiaux'];

  colHistoryTitles = ['MissionID', 'Type', 'Equipe', 'Zone', 'Durée', 'Date exécution'];

  data = {
    tab1: [
      ['1', 'Standard', 'Equipe B', '-', '50% (60 min)', '9:12'],
      ['2', 'Urgente', 'Equipe D', '-', '30% (80 min)', '9:20']
    ],
    tab2: [
      [84, 'Urgente', 'Equipe C', 'Zone C', '2h', '2'],
      [46, 'Standard', 'Attribuer mission', 'Zone A', {mission: true}, '5']
    ],
    tab3: [
      [23, 'Urgente', 'Equipe C', '-', '2h13', '28-03-2018 11:20'],
      [71, 'Standard', 'Equipe B', 'Zone A', '1h58', '28-03-2018 9:46']
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
