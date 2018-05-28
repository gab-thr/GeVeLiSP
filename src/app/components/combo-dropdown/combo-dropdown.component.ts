import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-combo-dropdown',
  templateUrl: './combo-dropdown.component.html',
  styleUrls: ['./combo-dropdown.component.css']
})
export class ComboDropdownComponent implements OnInit {

  areas: SelectItem[];

  // @Input() data: any;

  @Input() listAreas: any[];

  data: any = {
    listAreas: this.listAreas,
    selectedAreas: [],
    areas: this.areas
  };

  constructor() {

  }

  ngOnInit() {
    if (this.data) {
      this.data.areas = this.listAreas;
    }
  }

}
