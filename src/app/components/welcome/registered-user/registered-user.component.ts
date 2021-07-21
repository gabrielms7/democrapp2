import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
import { Election } from 'src/app/model/election.model';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {

  electionList: Election[];
  list = Array.from(Array(10).keys());

  constructor(private electionService: ElectionService) { }

  ngOnInit(): void {
    this.electionList = this.electionService.electionList;
  }

}
