import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { catchError, elementAt, EMPTY, empty, map, Observable, take } from 'rxjs';
import { User } from './../models/User.model';
import Swal from 'sweetalert2';

// import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UserService {



  private URL: string = "http://localhost:3333/users"

  private URLID: string = "http://localhost:3333/usuario"

  private URLEMAIL: string = "http://localhost:3333/busca"

  private URLLOGIN : string = "http://localhost:3333/login"

  private URLDELETE: string = "http://localhost:3333/users"

  public dataUserPet: any;


  constructor(private http: HttpClient) { }


  setData(newData: any){
    this.dataUserPet = newData.user_id;
  }

  getData(){
    return this.dataUserPet;
  }


  cadastrarUsuario(user: any, imageUser: any) : Observable<User> {

    const formData = new FormData();

    if(imageUser){
      formData.append('imagem',imageUser, imageUser.name);
    }
    Object.keys(user).forEach((key) =>{formData.append(key,user[key])});


    return this.http.post<User>(this.URL, formData).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  buscarTodos() : Observable<User[]> {
    //Retornar e listar com Get.
    return this.http.get<User[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  buscarName(name: any) : Observable<User[]> {
    return this.http.get<User[]>(`${this.URLID}/${name}`).pipe(
      map(retorno => retorno),
    );
  }

  buscardId(userPetId: any) : Observable<User[]> {

    let idUser = userPetId[0].user_id;
    return this.http.get<User[]>(`${this.URLID}/${idUser}`).pipe(
      map(retorno => retorno),
    );
  }

  loginUsuario(user: User) : Observable<User> {

    if(user.senha == "" && user.email == ""){
       this.NotLogin();
    }
    else if(user.senha == null || user.senha == ""){
      this.senhaInvalida();
    }
    else if(user.senha.length < 6){
      this.lengthPass();
    }
    else if(user.email == null || user.email == ""){
      this.emailIvalido();
    }
    else{
      return this.http.post<User>(this.URLLOGIN, user).pipe(
        map(retorno => retorno),
        catchError(erro => this.exibeErro(erro))
      );
    }
    return EMPTY

  }

  BuscaPorEmail(user: any) : Observable<User[]>{
    return this.http.get<User[]>(`${this.URLEMAIL}/${user}`).pipe(
      map(retorno => retorno),
    );

  }

  DeleteUser(User :any){
    return this.http.delete(`${this.URLDELETE}/${User}`).pipe(take(1));
  }























  //TOASTS = MENSAGENS DE SUCESSO OU ERRO

  exibeErro(e: any): Observable<any>
  {
    this.mensagemErro();
    return EMPTY;
  }

  mensagemErro()
  {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Nome de usuário existente（＞人＜；）',
      showConfirmButton: false,
      timer: 3000
    })
  }

  senhaInvalida(): Observable<any>
  {
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/gato-bravo-trabalhando-na-ilustracao-de-laptop_138676-305.jpg?w=740',
      imageWidth: 370,
      imageHeight: 300,
      title: `<span><strong class = "text-danger">INSIRA UMA SENHA</strong> (￣o￣) . z Z</span>`,
      showConfirmButton: false,
      timer: 3000
    });
    return EMPTY
  }

  emailIvalido(): Observable<any>
  {
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/gato-dormindo-na-ilustracao-de-laptop_138676-136.jpg?w=740',
      imageWidth: 370,
      imageHeight: 300,
      title: `<span><strong class = "text-danger">INSIRA SEU EMAIL</strong> (´。＿。｀)</span>`,
      showConfirmButton: false,
      timer: 3000
    });
    return EMPTY
  }

  NotLogin(): Observable<any>
  {
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/gato-feliz-obter-uma-ilustracao-da-ideia_138676-307.jpg?w=740',
      imageWidth: 370,
      imageHeight: 300,
      title: `<span class = "text-success">INSIRA EMAIL E SENHA </span>`,
      showConfirmButton: false,
      timer: 3000
    });
    return EMPTY
  }

  lengthPass(): Observable<any>{
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/ilustracao-de-icone-dos-desenhos-animados-de-cacto-de-gato-bonito_138676-2692.jpg?w=740&t=st=1654012860~exp=1654013460~hmac=aa94c63844b8327194b7da691d1ea9ce17d6fbe089a8bcae9cffed1bfcceeef2',
      imageWidth: 370,
      imageHeight: 300,
      title: `<strong class = "text-warning"><span class = "text-primary">SENHA DEVE TER AO MENOS</span> 6 LETRINHAS</strong>`,
      showConfirmButton: false,
      timer: 3500
    });

    return EMPTY
  }
}
