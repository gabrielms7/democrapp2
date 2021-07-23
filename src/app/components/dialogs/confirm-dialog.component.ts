import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-election-create-dialog',
  template: `
            <div fxFlex fxLayout="column" fxLayoutAlign="center center">
              <h1 mat-dialog-title>¿Está seguro?</h1>
              <mat-dialog-content>
                <p>{{ data.message }}</p>
              </mat-dialog-content>
              <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Si</button>
                <button mat-button [mat-dialog-close]="false">No</button>
              </mat-dialog-actions>
            </div>
            `
})
export class ConfirmDialogComponent {

  /**
   *
   * @param data En este parámetro viene la información (data) que se
   * le pasa al diálogo cuando se lo está construyendo.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
