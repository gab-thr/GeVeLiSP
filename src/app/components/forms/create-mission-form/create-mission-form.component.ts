import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-mission-form',
  templateUrl: './create-mission-form.component.html',
  styleUrls: ['./create-mission-form.component.css']
})
export class CreateMissionFormComponent implements OnInit {

  listZone = [
    {name: 'Sélectionner une zone'},
    {name: 'Zone A', value: 'zoneA'},
    {name: 'Zone B', value: 'zoneB'},
    {name: 'Zone C', value: 'zoneC'},
    {name: 'Zone D', value: 'zoneD'}
  ];

  @Input() dataForm: any = {
    missionAmount: 4
  };

  constructor() { }

  create() {

  }

  ngOnInit() {
  }

}
