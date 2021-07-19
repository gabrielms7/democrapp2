import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-ballot-create-dialog',
  template: `<h1 mat-dialog-title>¿Está seguro?</h1>
             <mat-dialog-content>
              <p>Va a crear un nuevo tarjetón.</p>
             </mat-dialog-content>
             <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Si</button>
              <button mat-button [mat-dialog-close]="false">No</button>
             </mat-dialog-actions>`
})
export class BallotCreateDialogComponent {

  /**
   *
   * @param passedData En este parámetro viene la información (data) que se
   * le pasa al diálogo cuando se lo está construyendo.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

}