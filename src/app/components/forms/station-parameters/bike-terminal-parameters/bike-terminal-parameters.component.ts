import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bike-terminal-parameters',
  templateUrl: './bike-terminal-parameters.component.html',
  styleUrls: ['./bike-terminal-parameters.component.css']
})
export class BikeTerminalParametersComponent implements OnInit {

  listPeriod = [
    {name: 'Sélectionner une période'},
    {name: 'Estivale', value: 'estivale'},
    {name: 'Hivernale', value: 'hivernale'}
  ];

  @Input() data: any = {};

  constructor() { }

  ngOnInit() {
  }

}
