import Swal from 'sweetalert2';
import { Pet } from './../models/Pet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private URL: string = "http://localhost:3333/users/pets" //TODO arrumar consumo da API (URL DO NODE)

  private URLCADASTRO : string = "http://localhost:3333/users/1/pets"
  constructor(private http: HttpClient) {}
  buscarTodos() : Observable<Pet[]> {
    //Retornar e listar com Get.
    return this.http.get<Pet[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
  cadastrar(pet: Pet) : Observable<Pet> {

    return this.http.post<Pet>(this.URLCADASTRO, pet).pipe(
      map(retorno => this.ToastSucess(pet.name)),
      catchError(erro => this.cadastroErro(pet.name))
    );
  }

  exibeErro(e: any): Observable<any>
  {
    this.mensagemErro();
    return EMPTY;
  }

  exibeErroCadastro(e: any): Observable<any>
  {
    this.cadastroErro(e);
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

  cadastroErro(name: any) :Observable<any>{
    Swal.fire({
      position: 'top-end',
      imageUrl : 'assets/img/notfound.jpg',
      imageWidth: 300,
      imageHeight: 240,
      title:`<span class="text-success"><strong class="text-danger">ERRO AO CADASTRAR</strong> ${name.toUpperCase()}</span>`,
      showConfirmButton: false,
      timer: 3000
    });
    return EMPTY;
  }

  ToastSucess(pets : any) :Observable<any>{
    Swal.fire({
      position: 'top-end',
      imageUrl : '/assets/img/funfo.jpg',
      imageWidth: 400,
      imageHeight: 340,
      title: `${pets.toUpperCase()} <strong>BEM VINDO AO <SPAN class ="text-danger">AMOPATAS</SPAN></strong> `,
      showConfirmButton: false,
      timer: 4500
    })
    return EMPTY;
  }
}
