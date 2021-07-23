import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BallotService } from 'src/app/services/ballot.service';

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

  }

}
