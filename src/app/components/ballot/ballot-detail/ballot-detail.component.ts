import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Ballot } from 'src/app/model/ballot.model';
import { BallotService } from 'src/app/services/ballot.service';

@Component({
  selector: 'app-ballot-detail',
  templateUrl: './ballot-detail.component.html',
  styleUrls: ['./ballot-detail.component.css']
})
export class BallotDetailComponent implements OnInit {

  /**
   * Para comprender el uso del signo de dolar '$' en la definición de variables en TypeScript
   * leer el siguiente artículo:
   * Naming conventions for observables
   * https://angular.io/guide/rx-library#naming-conventions-for-observables
   */
  ballot$: Observable<Ballot>;

  constructor(private route: ActivatedRoute, private ballotService: BallotService) { }

  /**
   * En este método se obtiene el parámetro 'id' que viaja por la url y se lo utiliza para
   * encontrar el objeto correspondiente de tipo 'Ballot'.
   */
  ngOnInit(): void {
    this.ballot$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.ballotService.getBallot(params.get('id')))
    );
  }

}
