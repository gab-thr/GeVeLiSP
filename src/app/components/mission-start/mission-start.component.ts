import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mission-start',
  templateUrl: './mission-start.component.html',
  styleUrls: ['./mission-start.component.css']
})
export class MissionStartComponent implements OnInit {

  @Input() data: any = {

  };



  constructor() { }

  ngOnInit() {
  }

}
