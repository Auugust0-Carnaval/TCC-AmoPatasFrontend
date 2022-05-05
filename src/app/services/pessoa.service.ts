import { Pessoa } from '../models/Pessoa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private URL: string = "http://localhost:5186/Pessoas"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}


  buscarTodos() : Observable<Pessoa[]> {
    //Retornar e listar com Get.
    return this.http.get<Pessoa[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  cadastrar(pessoa: Pessoa) : Observable<Pessoa> {
    return this.http.post<Pessoa>(this.URL, pessoa).pipe(
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
