import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-team-form',
  templateUrl: './create-team-form.component.html',
  styleUrls: ['./create-team-form.component.css']
})
export class CreateTeamFormComponent implements OnInit {

  teamName: string;
  cardID: string;
  capacity: string;
  password: string;

  @Input() dataForm: any = {
    createdTeam: {
      teamName: '',
      cardID: '',
      capacity: '',
      password: ''
    }
  };

  constructor() { }

  createTeam(teamName, cardID, capacity, password) {
    this.teamName = teamName;
    this.cardID = cardID;
    this.capacity = capacity;
    this.password = password;
    /*TODO confirm new team creation*/
  }
  ngOnInit() {
  }

}
