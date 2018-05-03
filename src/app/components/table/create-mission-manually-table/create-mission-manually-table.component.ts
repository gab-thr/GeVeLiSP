import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-mission-manually-table',
  templateUrl: './create-mission-manually-table.component.html',
  styleUrls: ['./create-mission-manually-table.component.css']
})
export class CreateMissionManuallyTableComponent implements OnInit {


  @Input() dataTable: any = {
    listStation: [
      {id: 0, name: 'Sélectionner une station'},
      {id: 1, name: '(1) - Station A', value: 'station1'},
      {id: 2, name: '(2) - Station B', value: 'station2'},
      {id: 3, name: '(3) - Station C', value: 'station3'}
    ],
    listAction: [
      {id: 0, name: 'Sélectionner une action'},
      {id: 1, name: 'Charger vélo(s)', value: 'Action1'},
      {id: 2, name: 'Déposer vélo(s)', value: 'Action2'},
      {id: 3, name: 'Nettoyer station', value: 'Action3'}
    ],
    tab: [
      {
        station: 2,
        action: 1,
        amountBicycle: 5,
        nbBicycle: 9
      },
      {
        station: 3,
        action: 2,
        amountBicycle: 3,
        nbBicycle: 1
      }
    ]
  };

  addRecord() {
    this.dataTable.tab.push({
      station: 0,
      action: 0,
      amountBicycle: 0,
      nbBicycle: 0
    });
  }

  deleteRecord(item) {
    this.dataTable.tab.splice(this.dataTable.tab.indexOf(item), 1);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
