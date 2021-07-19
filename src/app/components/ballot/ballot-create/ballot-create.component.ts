import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BallotService } from 'src/app/services/ballot.service';
import { BallotCreateDialogComponent } from '../../dialogs/ballot-create-dialog.component';

@Component({
  selector: 'app-ballot-create',
  templateUrl: './ballot-create.component.html',
  styleUrls: ['./ballot-create.component.css']
})
export class BallotCreateComponent implements OnInit {

  /**
   * En esta variable se configura el formulario (reactivo) para la creación de una elección.
   */
   ballotCreateForm = this.fb.group({
    ballot_name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router, private ballotService: BallotService) { }

  ngOnInit(): void {
  }

  /**
   * Este método se ejecuta cuando se presiona el botón 'Guardar' de la plantilla
   * correspondiente a este componente.
   */
  onSubmit() {
    // Mostrar el diálogo de confirmación para la creación del tarjetón.
    const dialogRef = this.dialog.open(BallotCreateDialogComponent, {
      // En la variable 'data' se pasa información para mostrar en la ventana de diálogo.
      data: {
        ballot_name: this.ballotCreateForm.value.ballot_name
      }
    });
    // Lo que pasa cuando se cierra la ventana de diálogo.
    dialogRef.afterClosed().subscribe(result => {
      // Si el usuario presiona 'Si' se procede a la creación del tarjetón y luego se
      // redirecciona a la página donde se muestran los tarjetones creados hasta el momento.
      if (result) {
        this.ballotService.addBallot({
          id: Math.round(Math.random() * 10000).toString(),
          name: this.ballotCreateForm.value.ballot_name
        });
        this.router.navigate(['/ballot-list']);
      }
    });
  }

}
