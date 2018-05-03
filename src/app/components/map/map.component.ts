import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  /*Focus point on the map when the website loads*/
  @Input() lat = 46.79999039999999;
  @Input() lng = 7.159071199999971;
  zoomLevel = 13;

  @Input() listStation = [
    {id: 1, name: 'Gare', lat: 46.8031371, lng: 7.151110700000004, chart: [[1, 2, 3], [12, 10, 15]]},
    {id: 2, name: 'Pérolle', lat: 46.79342039999999, lng: 7.159071199999971, chart: [[5, 6, 7], [17, 180, 5]]},
    {id: 3, name: 'Cathédrale St-Nicolas', lat: 46.80599949272003, lng: 7.16367474169715, chart: [[3, 1, 9], [12, .321, 78]]},
    {id: 4, name: 'Université de Fribourg', lat: 46.80620271974984, lng: 7.153754041875345, chart: [[9, 4, 6], [687, 17, 65]]}
  ]

  constructor() { }

  /*TODO modify appearance of markers, set them round with ID on it*/

  ngOnInit() {
  }

}
