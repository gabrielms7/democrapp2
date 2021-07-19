import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

import { AuthData } from "../model/auth-data.model";
import { User } from "../model/user.model";

@Injectable()
export class AuthService {

  /**
   * La variable booleana 'authChange' se utiliza como bandera para saber
   * si el usuario se encuentra autenticado (true) o no (false). Note que
   * esta variable es un observador.
   */
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  /**
   * Este método se ejecuta cuando el usuario se registra en la aplicación.
   * @param authData Interface que contiene los datos del usuario para autenticación.
   */
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  /**
   * Este método se ejecuta cuando el usuario intenta iniciar sesión en la aplicación.
   * @param authData Interface que contiene los datos del usuario para autenticación.
   */
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfully();
  }

  /**
   * Este método se ejecuta cuando el usuario cierra sesión en la aplicación.
   */
  logout() {
    this.user = null;
    this.authChange.next(false); // Bandera para indicar que el usuario NO se encuentra autenticado.
    this.router.navigate(['/']); // Redireccionar a la página de inicio de usuario no autenticado.
  }

  /**
   * Este método se ejecuta luego de que el usuario se registra en la aplicación
   * o luego de que inicia sesión de manera exitosa.
   */
  private authSuccessfully() {
    this.authChange.next(true); // Bandera para indicar que el usuario SI se encuentra autenticado.
    this.router.navigate(['/welcome']); // Redireccionar a la página de inicio de usuario autenticado.
  }

  /**
   * Este método retorna el usuario que se encuentra autenticado en la aplicación.
   * El operador spread (...) extiende o copia las propiedades del objeto 'user'
   * en otro objeto para asegurar la integridad del objeto original. El objeto
   * resultante tiene las mismas características pero es completamente nuevo.
   * Esto se hace por razones de seguridad.
   * @returns user Usuario autenticado.
   */
  getUser(): User {
    return { ...this.user };
  }

  /**
   * Este método permite saber si el usuario se encuentra autenticado o no.
   * @returns true | false 'true' si el usuario se encuentra autenticado, 'false' en caso contrario.
   */
  isAuth(): boolean {
    return this.user != null;
  }

}
