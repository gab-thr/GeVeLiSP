import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-network-period-parameters',
  templateUrl: './edit-network-period-parameters.component.html',
  styleUrls: ['./edit-network-period-parameters.component.css']
})
export class EditNetworkPeriodParametersComponent implements OnInit {

  @Input() dataForm: any = {
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
