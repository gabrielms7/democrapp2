import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ballot } from 'src/app/model/ballot.model';
import { BallotService } from 'src/app/services/ballot.service';

@Component({
  selector: 'app-ballot-list',
  templateUrl: './ballot-list.component.html',
  styleUrls: ['./ballot-list.component.css']
})
export class BallotListComponent implements OnInit {

  /**
   * En esta variable se almacenan los nombres de las columnas que se
   * muestran en la tabla de la plantilla correspondiente a este componente.
   */
   displayedColumns: string[] = [ 'name', 'options' ];
   /**
   * En este array se almacenan objetos de tipo 'Ballot'.
   */
  ballotList$: Observable<Ballot[]>;

  constructor(private ballotService: BallotService) { }

  /**
   * En este método se carga el array que contiene objetos de tipo 'Ballot'.
   */
  ngOnInit(): void {
    this.ballotList$ = this.ballotService.getBallotList();
  }

}
