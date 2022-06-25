import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, empty } from 'rxjs';
import Swal from 'sweetalert2';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {


  body: any={
    user_solicita: '',
    user_id: '',
  }

  private URL: any = "http://localhost:3333/solici";

  private URLAP: any = "http://localhost:3333/solicitacao"

  private URLSOLI: any = "http://localhost:3333/pets"


  constructor(private http: HttpClient,  private userdata: UserDataService) { }


  cadastrar(userSolicita: any, pet: any) : Observable<any> {

    this.body.user_solicita = userSolicita;
    this.body.user_id = pet.user_id;

    return this.http.post<any>(`${this.URLSOLI}/${pet.id}/solicitacao`, this.body).pipe(
      map(retorno => retorno),
      catchError(erro => this.mensagemErro(erro))
    );
  }

  BuscaSolici(userAutentic: any) : Observable<any> {
    return this.http.get<any>(`${this.URL}/${userAutentic}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.mensagemErro(erro))
    );
  }

  AproSolici(idsolicitacao: any) : Observable<any> {
    return this.http.post<any>(`${this.URLAP}/${idsolicitacao}/aprovados`,EMPTY).pipe(
      map(retorno => retorno),
      catchError(erro => this.mensagemErro(erro))
    );
  }



  mensagemErro(erro: any):Observable<any>
  {
    Swal.fire({
      position:'center',
      icon:'error',
      title: '<span class="text-danger">ERRO AO FAZER A SOLICITACÃO</span>',
      showConfirmButton: false,
      timer: 3000
    })

    return EMPTY;
  }


}
