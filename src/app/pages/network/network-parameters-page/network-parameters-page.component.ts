import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-network-parameters-page',
  templateUrl: './network-parameters-page.component.html',
  styleUrls: ['./network-parameters-page.component.css']
})
export class NetworkParametersPageComponent implements OnInit {

  colZonesTitles = ['#équipes', 'Nom', '#stations', 'Sélection stations'];
  colPeriodTitles = ['Nom', 'Date début', 'Date fin', '#vélos min', '#vélos max', '#vélos idéal', '#vélos alerte', ' '];

  @Input() data = {
    dataZone: [
      [2, 'Zone A', 26, {select : true}],
      [2, 'Zone B', 26, {select : true}],
      [3, 'Zone A', 18, {select : true}],
      [3, 'Zone B', 18, {select : true}],
      [3, 'Zone C', 16, {select : true}]
    ],
    dataPeriod: [
      ['Estival', '21.04', '23.10', 3, 8, 4, 2, {value : true}],
      ['Hivernal', '24.10', '20.04', 1, 7, 3, 1, {value : true}]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
