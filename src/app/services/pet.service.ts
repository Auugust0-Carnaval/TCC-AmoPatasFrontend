import { UserDataService } from './user-data.service';
import Swal from 'sweetalert2';
import { Pet } from './../models/Pet.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {


  private URL: string = "http://localhost:3333/users/pets" //TODO arrumar consumo da API (URL DO NODE)

  private URLDELETE: string = "http://localhost:3333/pets" //TODO arrumar consumo da API (URL DO NODE)

  private URLCADASTRO : string = "http://localhost:3333/users"

  constructor(private http: HttpClient, private userdata: UserDataService) {}

  buscarTodos() : Observable<Pet[]> {
    //Retornar e listar com Get.
    return this.http.get<Pet[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  cadastrar(pet: any, imagemPet: any) : Observable<any> {
    let PetUser = this.userdata.getData();

    const formData = new FormData();

    if(imagemPet){
      formData.append('imagem',imagemPet, imagemPet.name);
    }

      Object.keys(pet).forEach((key) =>{formData.append(key,pet[key])});

      return this.http.post<any>(`${this.URLCADASTRO}/${PetUser.id}/pets`, formData ).pipe(
        map(retorno => this.ToastSucess(pet.name)),
        catchError(erro => this.cadastroErro(pet.name))
      );
  }

  DeletePet(pet :any){
    return this.http.delete(`${this.URLDELETE}/${pet.id}`).pipe(take(1));
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
      title: `<strong><span class = "text-success">${pets.toUpperCase()}</span></strong><strong> BEM VINDO AO <SPAN class ="text-danger">AMOPATAS</SPAN></strong> `,
      showConfirmButton: false,
      timer: 4500
    })
    return EMPTY;
  }

  NotImage(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/casal-de-gatos-se-apaixonar-icone-gato-e-amor-animal-icone-branco-isolado_138676-511.jpg?w=740',
      imageWidth: 400,
      imageHeight: 340,
      title: `<strong><SPAN class ="text-danger">INSIRA A FOTO DO PET</SPAN></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  NameNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/gato-bonito-sentado-na-pilha-de-livros-ilustracao-do-icone-dos-desenhos-animados-icone-de-educacao-animal-isolado-estilo-flat-cartoon_138676-3108.jpg?t=st=1654994548~exp=1654995148~hmac=88cc0c5604cdbe47f9e9a939bfca895647b8a12b1ddee7238b732b9e7f4133b1&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><SPAN class ="uk-text-warning">INSIRA O NOME DO PET</SPAN></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  PorteNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/peixe-palhaco-bonitinho-natacao-cartoon-ilustracao-vetorial-icone-ilustracao-animal-natureza-icone-conceito-isolado-plano_138676-4489.jpg?t=st=1654995267~exp=1654995867~hmac=8345a234ff878cdc6e734d9aebc965d4be12d6c298d932dc44ef5349afb694c1&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><SPAN class ="uk-text-warning">INSIRA PORTE DO PET (。﹏。*)</SPAN></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  BreedNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/ilustracao-de-icone-de-vetor-de-desenho-animado-de-pesca-de-peixe-bonito-conceito-de-icone-de-esporte-animal-isolado-plano-premium_138676-4566.jpg?t=st=1654995593~exp=1654996193~hmac=80c61161de5ad9d0b917090e123d73089cbacc1993372fa918cb7e2375d6c625&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><span class ="uk-text-warning">INSIRA À RAÇA DO PET</span></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  TextAreaNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/cool-husky-dog-usando-oculos-cartoon-icone-ilustracao-vetorial-conceito-de-icone-de-natureza-animal-isolado-vetor-premium-estilo-flat-cartoon_138676-3659.jpg?t=st=1654995608~exp=1654996208~hmac=e501d5335f0f68e184d3bbf19521a549a590fa08d8fb1c15fbb966d8389756cc&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><span class ="uk-text-danger">INSIRA À DESCRICAO DO SEU PET</span></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  SexNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/ilustracao-dos-desenhos-animados-do-super-heroi-do-gato-bonito-animal-hero-concept-isolated-flat-cartoon_138676-2296.jpg?t=st=1654996148~exp=1654996748~hmac=c7d821c6d4ebedb8544e84be16e5e3fe96ed3d1d3101b299dfd2ca47791d96a6&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><span class ="text-warning">INSIRA O SEXO DO PETZINHO</span></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  UfNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/ilustracao-do-icone-dos-desenhos-animados-do-super-heroi-do-gato-bonito-conceito-de-icone-de-heroi-animal-isolado-estilo-flat-cartoon_138676-3127.jpg?t=st=1654996456~exp=1654997056~hmac=4f79ae785c0efadf958176377a210a1e5c7d32133183c644c8bc0b50a0a1728b&w=740',
      imageWidth: 380,
      imageHeight: 340,
      title: `<strong><span class ="text-danger">INSIRA O ESTADO ONDE O PET MORA</span></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }



}
