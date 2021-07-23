import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ElectionService } from 'src/app/services/election.service';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog.component';

@Component({
  selector: 'app-election-create',
  templateUrl: './election-create.component.html',
  styleUrls: ['./election-create.component.css']
})
export class ElectionCreateComponent implements OnInit {

  /**
   * Esta variable sirve para fijar la fecha mínima a partir de la cual se puede
   * crear un Tarjetón. En este caso se define la feha actual como fecha mínima,
   * esto porque no se puede crear una jornada electoral en una fecha que ya pasó.
   */
  minDate = new Date();
  /**
   * En esta variable se configura el formulario (reactivo) para la creación de una elección.
   */
  electionCreateForm = this.fb.group({
    election_name: ['', Validators.required],
    election_date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router, private electionService: ElectionService) {}

  ngOnInit(): void {
  }

  /**
   * Este método se ejecuta cuando se presiona el botón 'Guardar' de la plantilla
   * correspondiente a este componente.
   */
  onSubmit() {
    // Mostrar el diálogo de confirmación para la creación de la jornada electoral.
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      // En la variable 'data' se pasa información para mostrar en la ventana de diálogo.
      data: {
        message: 'Va a crear una nueva Jornada Electoral.'
      }
    });
    // Lo que pasa cuando se cierra la ventana de diálogo.
    dialogRef.afterClosed().subscribe(result => {
      // Si el usuario presiona 'Si' se procede a la creación de la elección y luego
      // se redirecciona a la página donde se muestran las elecciones creadas hasta el momento.
      if (result) {
        this.electionService.addElection({
          id: Math.round(Math.random() * 10000).toString(),
          name: this.electionCreateForm.value.election_name,
          date: this.electionCreateForm.value.election_date
        });
        this.router.navigate(['/election-list']);
      }
    });
  }

}
