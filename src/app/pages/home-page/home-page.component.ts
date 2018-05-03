import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  col = ['MissionID', 'Type', 'Equipe', 'Zone', 'Durée estimée', '#vélos initiaux'];

  colTitles = ['Mission ID', 'Type', 'Equipe', 'Zone', 'Complétion(durée restante approx.)', 'débutée à'];

  data = {
    tab1: [
      ['1', 'Standard', 'Equipe B', '-', '50% (60 min)', '9:12'],
      ['2', 'Urgente', 'Equipe D', '-', '30% (80 min)', '9:20']
    ],
    tab2: [
      [84, 'Urgente', 'Equipe C', 'Zone C', '2h', '2'],
      [46, 'Standard', 'Equipe B', 'Zone A', '1h30', '5']
    ],
    listStation: [
      {id: 1, name: 'Gare', lat: 46.8031371, lng: 7.151110700000004, chart: [[1, 2, 3], [12, 10, 15]]},
      {id: 2, name: 'Pérolle', lat: 46.79342039999999, lng: 7.159071199999971, chart: [[5, 6, 7], [17, 180, 5]]},
      {id: 3, name: 'Cathédrale St-Nicolas', lat: 46.80599949272003, lng: 7.16367474169715, chart: [[3, 1, 9], [12, .321, 78]]},
      {id: 4, name: 'Université de Fribourg', lat: 46.80620271974984, lng: 7.153754041875345, chart: [[9, 4, 6], [687, 17, 65]]}
    ],
    lat: 46.79999039999999,
    lng: 7.159071199999971
  };

  constructor() {
  }

  ngOnInit() {
  }

}
