import { AuthService } from './../../components/login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor( private authService : AuthService,
                 private router: Router // forcando voltar ora tela de login caso nao esteja autentivcad
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot

    ): Observable<boolean> | boolean{
      if(this.authService.usuarioEstaAutenticado()){
        return true; // se o usuario tivcer autenticado retornar true e ele pode entrar
      }
      else{
        this.router.navigate(['/login']); // indicando a rota qe é pra voltar
          return false;
      }
    }

  }


