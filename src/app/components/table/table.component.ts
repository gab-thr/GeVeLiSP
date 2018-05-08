import {Component, Input, OnInit} from '@angular/core';
import { SelectItem} from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() colTitles: any;
  // @Input() colTitles = ['Mission ID', 'Type', 'Equipe', 'Zone', 'Complétion(durée restante approx.)', 'débutée à'];
  @Input() data: any;
  // @Input() data = [
  //   ['1', 'Standard', 'Equipe B', '-', '50% (60 min)', '9:12'],
  //   ['2', 'Urgente', 'Equipe D', '-', '30% (80 min)', '9:20']
  // ];
  dataSelect: any = {
    areas1: [
      {label: '(1) - Zone A', value: 'zoneA'},
      {label: '(2) - Zone B', value: 'zoneB'},
      {label: '(3) - Zone C', value: 'zoneC'},
      {label: '(4) - Zone D', value: 'zoneD'},
      {label: '(5) - Zone G', value: 'zoneE'}
    ],
    selectedAreas1: []
  };

  deleteRecord(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
