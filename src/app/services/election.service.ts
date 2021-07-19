import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { Election } from "../model/election.model";

@Injectable()
export class ElectionService {

  /**
   * El array 'electionList' sirve para almacenar objetos de tipo 'Election'.
   */
  electionList: Election[] = [];

  /**
   * Este método sirve para almacenar objetos de tipo 'Election' en el array correspondiente.
   * @param election La elección que se desea crear.
   */
  addElection(election: Election) {
    this.electionList.push(election);
  }

  /**
   * Este método retorna un objeto de tipo 'Election' según un identificador particular.
   * @param id Identificador del objeto de tipo 'Election' que se quiere buscar.
   * @returns El objeto encontrado de tipo 'Election'.
   */
  getElection(id: string): Observable<Election> {
    return this.getElectionList().pipe(
      map((elections: Election[]) => elections.find(election => election.id === id))
    );
  }

  /**
   * Este método retorna un array observable de objetos de tipo 'Election'.
   * @returns Array de objetos de tipo 'Election'.
   */
  getElectionList(): Observable<Election[]> {
    // Para comprender el significado de la función 'of' de rxjs leer el siguiente artículo:
    // https://stackoverflow.com/questions/47889210/why-we-should-use-rxjs-of-function
    return of(this.electionList);
  }

}
