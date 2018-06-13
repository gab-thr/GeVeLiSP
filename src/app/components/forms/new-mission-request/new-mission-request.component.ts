import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-mission-request',
  templateUrl: './new-mission-request.component.html',
  styleUrls: ['./new-mission-request.component.css']
})
export class NewMissionRequestComponent implements OnInit {



  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
