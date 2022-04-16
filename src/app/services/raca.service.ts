import { Raca } from './../models/Raca.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class RacaService {
  private URL: string = "http://localhost:5186/Racas"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}


  buscarTodos() : Observable<Raca[]> {
    //Retornar e listar com Get.
    return this.http.get <Raca[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }




  cadastrar(raca: Raca) : Observable<Raca> {
    return this.http.post<Raca>(this.URL, raca).pipe(
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


