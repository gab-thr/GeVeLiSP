import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements OnInit {

  lat = 46.79999039999999;
  lng = 7.157071199999971;
  zoomLevel = 13;

  @Input() listStation = [
    {id: 'A', origin: {lat: 46.8031371, lng: 7.151110700000004}, destination: {lat: 46.79342039999999, lng: 7.159071199999971}}
    // {id: 'B', name: 'Pérolle', lat: 46.79342039999999, lng: 7.159071199999971, chart: [[5, 6, 7], [17, 180, 5]]}
  ]

  constructor() { }

  ngOnInit() {
  }
}
