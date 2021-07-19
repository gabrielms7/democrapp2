import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from 'src/app/model/election.model';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-election-list',
  templateUrl: './election-list.component.html',
  styleUrls: ['./election-list.component.css']
})
export class ElectionListComponent implements OnInit {

  /**
   * En esta variable se almacenan los nombres de las columnas que se
   * muestran en la tabla de la plantilla correspondiente a este componente.
   */
  displayedColumns: string[] = [ 'name', 'date', 'options' ];
  /**
   * En este array se almacenan objetos de tipo 'Election'.
   */
  electionList$: Observable<Election[]>;

  constructor(private electionService: ElectionService) { }

  /**
   * En este método se carga el array que contiene objetos de tipo 'Election'.
   */
  ngOnInit(): void {
    this.electionList$ = this.electionService.getElectionList();
  }

}
