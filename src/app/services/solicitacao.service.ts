import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, empty } from 'rxjs';
import Swal from 'sweetalert2';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {


  body: any={
    // user_solicita: '',
    // user_id: '',
    name_solicita: '',
    name_dono:'',
    name_pet:'',
    telefone_solicita:'',
    telefone_dono:'',
    imagem_solicita:'',

  }



  private URL: any = "http://localhost:3333/solici";

  private URLAP: any = "http://localhost:3333/solicitacao"

  private URLUSERSOLI: any = "http://localhost:3333/users"


  private URLSOLI: any = "http://localhost:3333/pets"


  constructor(private http: HttpClient,  private userdata: UserDataService) { }


  cadastrar(userSolicita: any, pet: any, userdono:any) : Observable<any> {

    const formData = new FormData();

    this.body.name_solicita = userSolicita.name;
    this.body.name_dono = userdono.name;
    this.body.name_pet = pet.name;
    this.body.telefone_solicita = userSolicita.telefone;
    this.body.telefone_dono = userdono.telefone;
    // this.body.imagem_solicita = userSolicita.imagem

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'user_solicita' : `${userSolicita.id}`,
      'user_id' : `${userdono.id}`});


    let options = {headers: headers}
    // headers.append('Content-Type','application/json');
    // headers.append('user_solicita', `${userSolicita.id}`);
    // headers.append('user_id', `${userdono.id}`);

    return this.http.post<any>(`${this.URLSOLI}/${pet.id}/solicitacao`, this.body, options).pipe(
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

  RecuSolici(idsolicitacao: any) : Observable<any> {
    return this.http.post<any>(`${this.URLAP}/${idsolicitacao}/reprovados`,EMPTY).pipe(
      map(retorno => retorno),
      catchError(erro => this.mensagemErro(erro))
    );
  }


  SoliUser(userAutentic: any) : Observable<any> {
    return this.http.get<any>(`${this.URLUSERSOLI}/${userAutentic}/solicitacao`).pipe(
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
