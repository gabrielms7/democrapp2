import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  /**
   * La variable 'closeSidenav' se utiliza para emitir un evento que se
   * consume desde la plantilla principal de la aplicación.
   */
  @Output() closeSidenav = new EventEmitter<void>();
  /**
   * La variable booleana 'isAuth' se utiliza como bandera para saber
   * si el usuario se encuentra autenticado (true) o no (false).
   * Esta variable se utiliza con el fin de mostrar u ocultar ciertos
   * elementos de la plantilla correspondiente a este componente.
   */
  isAuth = false;
  /**
   * La variable 'authSubscription' es un observador que permite conocer en
   * 'tiempo real' si el usuario se encuentra autenticado o no.
   */
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  /**
   * En este método se realiza la suscripción de la variable 'authSubscription'.
   * Tenga en cuenta que si se alcanza este método, el estado de la variable 'authChange'
   * siempre será 'true'.
   */
  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    });
  }

  /**
   * Este método se ejecuta luego de que se selecciona cualquier opción del 'sidenav'.
   * El evento que se emite se consume en la plantilla principal de la aplicación.
   */
  onClose() {
    this.closeSidenav.emit();
  }

  /**
   * Este método se ejecuta cuando se presiona el botón 'Salir' del 'sidenav'.
   */
  onLogout() {
    this.onClose();
    this.authService.logout();
  }

  /**
   * En este método se hace la 'desuscripción' de la variable 'authSubscription'.
   * Esto se hace para liberar memoria.
   */
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
