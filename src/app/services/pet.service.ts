import Swal from 'sweetalert2';
import { Pet } from './../models/Pet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //variável que conterá a URL de onde ele irá buscar as informações do nossos pets;
  private URL: string = "http://localhost:5186/Pets"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}
  // métodos, Observable vai esperar alguma ação ehehe muitaooooo siiim olha

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
