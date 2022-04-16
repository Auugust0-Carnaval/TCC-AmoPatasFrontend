import { Porte } from './../models/Porte.model';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PorteService {
  private URL: string = "http://localhost:5186/Portes"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}


  buscarTodos() : Observable<Porte[]> {
    //Retornar e listar com Get.
    return this.http.get<Porte[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  cadastrar(porte: Porte) : Observable<Porte> {
    return this.http.post<Porte>(this.URL, porte).pipe(
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
    });
  }
}
