import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-combo-dropdown',
  templateUrl: './combo-dropdown.component.html',
  styleUrls: ['./combo-dropdown.component.css']
})
export class ComboDropdownComponent implements OnInit {

  areas1: SelectItem[];

  @Input() data: any = {
    areas1: [
      {label: '(1) - Zone A', value: 'zoneA'},
      {label: '(2) - Zone B', value: 'zoneB'},
      {label: '(3) - Zone C', value: 'zoneC'},
      {label: '(4) - Zone D', value: 'zoneD'},
      {label: '(5) - Zone E', value: 'zoneE'}
    ],
    selectedAreas1: []
  };

  constructor() {
    this.areas1 = this.data.areas1;
  }

  ngOnInit() {
  }

}
