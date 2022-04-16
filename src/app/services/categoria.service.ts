import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Categoria } from '../models/Categoria.model';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private URL: string = "http://localhost:5186/Categorias"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}


  buscarTodos() : Observable<Categoria[]> {
    //Retornar e listar com Get.
    return this.http.get<Categoria[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }




  cadastrar(categoria: Categoria) : Observable<Categoria> {
    return this.http.post<Categoria>(this.URL, categoria).pipe(
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
