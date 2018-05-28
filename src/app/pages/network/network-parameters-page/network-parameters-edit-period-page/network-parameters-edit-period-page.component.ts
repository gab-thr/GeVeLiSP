import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-network-parameters-edit-period-page',
  templateUrl: './network-parameters-edit-period-page.component.html',
  styleUrls: ['./network-parameters-edit-period-page.component.css']
})
export class NetworkParametersEditPeriodPageComponent implements OnInit {

  data: any = {
    period: {
      name: '',
      start: '',
      end: '',
      min: 0,
      max: 0,
      alert: 0,
      ideal: 0
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
