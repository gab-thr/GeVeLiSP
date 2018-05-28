import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {

  @Input() data: any = [
    {
      label: 'Prédictions',
      backgroundColor: '#42A5F5',
      borderColor: '#1E88E5',
      data: [2, 5, 8, 12, 7, 2, 0]
    }
  ];

  constructor() {
    this.data = {
      labels: ['quatité actuelle', '1h', '2h', '3h', '4h', '5h', '6h'],
      datasets: this.data
    };
  }

  // data: any;
  //
  // constructor() {
  //   this.data = {
  //     labels: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h', '24h'],
  //     datasets: [
  //       {
  //         label: 'My First dataset',
  //         backgroundColor: '#42A5F5',
  //         borderColor: '#1E88E5',
  //         data: [10, 13, 11, 9, 10, 6, 0, 12, 11, 16, 12, 6, 10, 13, 11, 9, 10, 6, 5, 12, 11, 16, 12, 6]
  //       }
  //     ]
  //   };
  // }

  ngOnInit() {
  }

}
