import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, EMPTY, empty, map, Observable } from 'rxjs';
import { User } from './../models/User.model';
import Swal from 'sweetalert2';

// import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UserService {



  private URL: string = "http://localhost:3333/user/"

  private URLLOGIN : string = "http://localhost:3333/login"

  constructor(private http: HttpClient) { }

  cadastrarUsuario(user: any) : Observable<User> {
    return this.http.post<User>(this.URL, user).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  buscarTodos() : Observable<User[]> {
    //Retornar e listar com Get.
    return this.http.get<User[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }


  buscardId(id: any) : Observable<User[]> {
    return this.http.get<User[]>(`${this.URL+id}`).pipe(
      map(retorno => retorno),
    );
  }

  loginUsuario(user: User) : Observable<User> {
    return this.http.post<User>(this.URLLOGIN, user).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any>
  {
    this.mensagemErro();
    return EMPTY;
  }

  mensagemErro()
  {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Nome de usuário existente（＞人＜；）',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
