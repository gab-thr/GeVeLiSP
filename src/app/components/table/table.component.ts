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
  //   ['1', 'Standard', 'Equipe B', '-', '50% (60 min)', {select: false}],
  //   ['2', 'Urgente', 'Equipe D', '-', '30% (80 min)', {select: false}]
  // ];

  areas: SelectItem[];

  dataSelect: any = {
    listAreas: [
      {label: '(1) - Station A', value: 'station A'},
      {label: '(2) - Station B', value: 'station B'},
      {label: '(3) - Station C', value: 'station C'},
      {label: '(4) - Station D', value: 'station D'},
      {label: '(5) - Station E', value: 'station E'}
    ],
    areas: this.areas
  };

  deleteRecord(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }



  constructor() {
  }

  ngOnInit() {
    if (this.data) {
      this.dataSelect.areas = this.dataSelect.listAreas;
    }
  }
}
