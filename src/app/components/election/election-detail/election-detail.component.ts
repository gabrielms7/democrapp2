import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Election } from 'src/app/model/election.model';
import { ElectionService } from 'src/app/services/election.service';

@Component({
  selector: 'app-election-detail',
  templateUrl: './election-detail.component.html',
  styleUrls: ['./election-detail.component.css']
})
export class ElectionDetailComponent implements OnInit {

  /**
   * Para comprender el uso del signo de dolar '$' en la definición de variables en TypeScript
   * leer el siguiente artículo:
   * Naming conventions for observables
   * https://angular.io/guide/rx-library#naming-conventions-for-observables
   */
  election$: Observable<Election>;

  constructor(private route: ActivatedRoute, private electionService: ElectionService) { }

  /**
   * En este método se obtiene el parámetro 'id' que viaja por la url y se lo utiliza para
   * encontrar el objeto correspondiente de tipo 'Election'.
   */
  ngOnInit(): void {
    this.election$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.electionService.getElection(params.get('id')))
    );
  }

}
