import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, empty, map, Observable } from 'rxjs';
import { User } from './../models/User.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private URL: string = "http://localhost:3333/users"

  constructor(private http: HttpClient) { }

  cadastrarUsuario(user: any) : Observable<User> {
    return this.http.post<User>(this.URL, user).pipe(
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
      position: 'top-end',
      icon: 'warning',
      title: 'Ohh não esta funfando :(',
      showConfirmButton: false,
      timer: 3000
    })
  }
}
