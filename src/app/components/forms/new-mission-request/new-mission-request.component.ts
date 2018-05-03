import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-mission-request',
  templateUrl: './new-mission-request.component.html',
  styleUrls: ['./new-mission-request.component.css']
})
export class NewMissionRequestComponent implements OnInit {



  @Input() data: any = {
    listZone: [
      {name: 'Sélectionner une station'},
      {name: 'Zone A', value: 'zoneA'},
      {name: 'Zone B', value: 'zoneB'},
      {name: 'Zone C', value: 'zoneC'},
      {name: 'Zone D', value: 'zoneD'}
    ]
  };

  constructor() { }

  onClickRequest() {
    /*TODO message confirmation*/
  }


  ngOnInit() {
  }

}
