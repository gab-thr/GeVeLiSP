import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mission-task',
  templateUrl: './mission-task.component.html',
  styleUrls: ['./mission-task.component.css']
})
export class MissionTaskComponent implements OnInit {

  @Input() task = {

  };

  constructor() { }

  ngOnInit() {
  }

}
