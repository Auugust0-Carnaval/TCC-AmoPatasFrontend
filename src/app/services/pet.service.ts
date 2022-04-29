import Swal from 'sweetalert2';
import { Pet } from './../models/Pet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private URL: string = "http://xyz" //TODO arrumar consumo da API (URL DO NODE)

  constructor(private http: HttpClient) {}


  buscarTodos() : Observable<Pet[]> {
    //Retornar e listar com Get.
    return this.http.get<Pet[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  /*buscarPorId(id: number) : Observable<Pet> {
    //Retornar e listar com Get.
    return this.http.get<Pet>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }*/

  cadastrar(pet: Pet) : Observable<Pet> {
    return this.http.post<Pet>(this.URL, pet).pipe(
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

  //copia tudo? sim sim pode


}
