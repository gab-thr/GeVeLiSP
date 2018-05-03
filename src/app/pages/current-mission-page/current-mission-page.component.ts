import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-mission-page',
  templateUrl: './current-mission-page.component.html',
  styleUrls: ['./current-mission-page.component.css']
})
export class CurrentMissionPageComponent implements OnInit {

  data: any = {
    title: 'Débuter mission',
    load: 'Charge initiale',
    initialQtyBikes: 2,
    tasks: [
      {
        name: 'Station A',
        qtyBikes: 2,
        loading: false,
        current: false
      },
      {
        name: 'Station B',
        qtyBikes: 16,
        loading: false,
        current: true
      },
      {
        name: 'Station C',
        qtyBikes: 8,
        loading: true,
        current: false
      },
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
