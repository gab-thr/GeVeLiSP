import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-network-parameters-page',
  templateUrl: './network-parameters-page.component.html',
  styleUrls: ['./network-parameters-page.component.css']
})
export class NetworkParametersPageComponent implements OnInit {

  colZonesTitles = ['#équipes', 'Nom', '#stations', 'Sélection stations'];
  colPeriodTitles = ['Nom', 'Date début', 'Date fin', '#vélos min', '#vélos max', '#vélos idéal', '#vélos alerte', 'active', ' '];

  data = {
    dataZone: [
      [2, 'Zone A', 27, {select : true, selectedAreas : []}],
      [2, 'Zone B', 26, {select : true, selectedAreas : []}],
      [3, 'Zone A', 18, {select : true, selectedAreas : []}],
      [3, 'Zone B', 18, {select : true, selectedAreas : []}],
      [3, 'Zone C', 16, {select : true, selectedAreas : []}]
    ],
    dataPeriod: [
      ['Estival', '21.04', '23.10', 3, 8, 4, 2, {value : true}, {editPeriod: true}],
      ['Hivernal', '24.10', '20.04', 1, 7, 3, 1, {value : true}, {editPeriod: true}]
    ]
  };

  addPeriod() {
    this.data.dataPeriod.push([
      'Nom',
      'date début',
      'date fin',
      0,
      0,
      0,
      0,
      {value: true},
      {editPeriod: true}
    ]);
  }

  addZone() {
    this.data.dataZone.push([
      0,
      'Nom Zone',
      0,
      {select: true, selectedAreas: []}
    ]);
  }

  constructor() { }

  ngOnInit() {
  }

}
