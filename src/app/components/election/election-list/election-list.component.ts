import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Election } from 'src/app/model/election.model';
import { ElectionService } from 'src/app/services/election.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class ElectionListComponent implements OnInit {

  elections$: Observable<Election[]>;

  constructor(private electionService: ElectionService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.elections$ = this.electionService.getElectionList();
  }

  /**
   * Redirecciona a la página de detalle de elección.
   * @param election objeto de tipo 'Election' seleccionado de la lista.
   */
  onSelect(election: Election): void {
    this.router.navigate(['/election-detail', election.id]);
  }

}
