import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-station-parameters',
  templateUrl: './station-parameters.component.html',
  styleUrls: ['./station-parameters.component.css']
})
export class StationParametersComponent implements OnInit {


  @Input() dataAll: any = {
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

  save() { }

  ngOnInit() {
  }

}
