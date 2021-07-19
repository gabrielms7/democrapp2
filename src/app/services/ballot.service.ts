import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Ballot } from "../model/ballot.model";

@Injectable()
export class BallotService {

  /**
   * El array 'ballotList' sirve para almacenar objetos de tipo 'Ballot'.
   */
  ballotList: Ballot[] = [];

  /**
   * Este método sirve para almacenar objetos de tipo 'Ballot' en el array correspondiente.
   * @param ballot El tarjetón que se desea crear.
   */
  addBallot(ballot: Ballot) {
    this.ballotList.push(ballot);
  }

  /**
   * Este método retorna un objeto de tipo 'Ballot' según un identificador particular.
   * @param id Identificador del objeto de tipo 'Ballot' que se quiere buscar.
   * @returns El objeto encontrado de tipo 'Ballot'.
   */
  getBallot(id: string): Observable<Ballot> {
    return this.getBallotList().pipe(
      map((ballots: Ballot[]) => ballots.find(ballot => ballot.id === id))
    );
  }

  /**
   * Este método retorna un array observable de objetos de tipo 'Ballot'.
   * @returns Array de objetos de tipo 'Ballot'.
   */
  getBallotList(): Observable<Ballot[]> {
    // Para comprender el significado de la función 'of' de rxjs leer el siguiente artículo:
    // https://stackoverflow.com/questions/47889210/why-we-should-use-rxjs-of-function
    return of(this.ballotList);
  }

}
