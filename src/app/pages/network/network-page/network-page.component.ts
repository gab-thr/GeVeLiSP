import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-page',
  templateUrl: './network-page.component.html',
  styleUrls: ['./network-page.component.css']
})
export class NetworkPageComponent implements OnInit {

  data: any = {
    listMarker: [
      {id: 1, name: 'Gare', lat: 46.8031371, lng: 7.151110700000004, chart: [[1, 2, 3], [12, 10, 15]]},
      {id: 2, name: 'Pérolle', lat: 46.79342039999999, lng: 7.159071199999971, chart: [[5, 6, 7], [17, 180, 5]]},
      {id: 3, name: 'Cathédrale St-Nicolas', lat: 46.80599949272003, lng: 7.16367474169715, chart: [[3, 1, 9], [12, .321, 78]]},
      {id: 4, name: 'Université de Fribourg', lat: 46.80620271974984, lng: 7.153754041875345, chart: [[9, 4, 6], [687, 17, 65]]}
    ],
    lat: 46.79999039999999,
    lng: 7.159071199999971,
    listStation: [
      {name: 'Sélectionner une station'},
      {name: '(1) - Station A', value: 'station1'},
      {name: '(2) - Station B', value: 'station2'},
      {name: '(3) - Station C', value: 'station3'}
    ],
    listZone: [
      {name: 'Sélectionner une zone'},
      {name: 'Zone A', value: 'zoneA'},
      {name: 'Zone B', value: 'zoneB'},
      {name: 'Zone C', value: 'zoneC'},
      {name: 'Zone D', value: 'zoneD'}
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
