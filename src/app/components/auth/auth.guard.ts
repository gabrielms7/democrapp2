import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Este método sirve de filtro para permitir el acceso a determinadas páginas
   * o componentes de la aplicación.
   * @param route
   * @param state
   * @returns true | ruta 'true' si el usuario se encuentra autenticado, 'ruta' en caso contrario.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redireccionar a la página de inicio de sesión.
    }
  }

}
