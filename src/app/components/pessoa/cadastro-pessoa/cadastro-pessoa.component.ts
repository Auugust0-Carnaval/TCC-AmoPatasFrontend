import { Router } from '@angular/router';
import { PetService } from './../../../services/pet.service';
import { UserService } from './../../../services/user.service';
import { User } from './../../../models/User.model';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { data } from 'jquery';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {


  //propriedade herdada da classe User
  user : User ={
    name : '',
    email : '',
    senha : '',
    descricao : '',
    telefone : '',
    data_nascimento : new Date(),
    // rede_social : '',
  }

  public senhaConf : any;

  public imagem: any;


  constructor(private userService : UserService, private route: Router) {
  }

  ngOnInit(): void {
  }

  selectedImage(event : any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imagem = file;
    }
    console.log(this.imagem);
  }

  criar(){
    this.user.data_nascimento?.valueOf
    console.log(this.user.data_nascimento)

    if(!this.imagem){
      this.imageNull();
    }
    else if(this.user.name == ""){
        this.inputName();
    }
    else if(this.user.senha == ""){
      this.userService.senhaInvalida();
    }
    else if(this.senhaConf != this.user.senha || this.user.senha != this.senhaConf){
      this.senhaDiferente();
    }
    else if(this.user.email == ""){
      this.InputEmail();
    }
    else if(this.user.telefone == ""){
    }
    else{
      this.userService.cadastrarUsuario(this.user, this.imagem).subscribe(retorno =>{
        this.user = retorno;
      });
      this.route.navigate(['/login'])
      this.ToastSucess();
    }
  }

  TelNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/telefone_53876-25489.jpg?t=st=1655409585~exp=1655410185~hmac=5eef5e3882d44c5dbe71ab1353e555ab396e730f70da6019045aa71593ec2bb0&w=740',
      imageWidth: 400,
      imageHeight: 340,
      title: `<strong><SPAN class ="text-danger">INSIRA SEU TELEFONE <span class="text-primary">${this.user.name?.toUpperCase()}</span></SPAN></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

  imageNull(){
    Swal.fire({
      imageUrl : 'https://img.freepik.com/vetores-gratis/cute-boy-fotografo-segurando-a-camera-desenho-animado-vetor-icone-ilustracao-pessoas-tecnologia-isolado_138676-4822.jpg?t=st=1655407539~exp=1655408139~hmac=23399b11da193f0afd6cf1805d9fbd442bf0dbe950f91ce4de3cd40e54b85fae&w=740',
      imageWidth: 400,
      imageHeight: 340,
      title: `<strong><SPAN class ="text-danger">INSIRA SUA FOTO DE PERFIL <span class="text-primary">${this.user.name?.toUpperCase()}</span></SPAN></strong> `,
      showConfirmButton: false,
      timer: 3000
    })
  }

 senhaDiferente(){
  Swal.fire({
    imageUrl : 'https://img.freepik.com/vetores-gratis/cao-engracado-corgi-patas-acima-sobre-a-parede-branca_42750-483.jpg?w=740',
    imageWidth: 400,
    imageHeight: 340,
    title: `<span><strong class="text-warning">AS SENHAS ESTAO DIFERENTES</strong></span>`,
    showConfirmButton: false,
    timer: 3000
  });
 }

 inputName(){
  Swal.fire({
    imageUrl : 'https://img.freepik.com/vetores-gratis/gato-bonito-unicornio-gatinho-de-desenho-animado-com-chifre-encontra-se-no-arco-iris-recreacao-bonita-de-animais-de-estimacao-na-nuvem-dormindo-gatinho-no-ceu-modelo-de-conto-de-fadas-para-textil-animal-engracado-adesivo-web-vector-ilustracao-na-moda_176516-2113.jpg?w=740',
    imageWidth: 320,
    imageHeight: 260,
    title: `<span><strong class="text-warning">INSIRA SEU NOME</strong></span>`,
    showConfirmButton: false,
    timer: 3000
  });
 }

 InputEmail(){
  Swal.fire({
    imageUrl : 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-correio_114360-396.jpg?t=st=1654011100~exp=1654011700~hmac=a60d834a20813378f575058d1f82bb53ad6ab00e7e4a886b833d55ea3854320c&w=740',
    imageWidth: 320,
    imageHeight: 260,
    title: `<span><strong class="text-success">INSIRA SEU EMAIL</strong><strong class ="text-success"> (ノへ￣、)</strong></span>`,
    showConfirmButton: false,
    timer: 3000
  });

 }

 formNot(){
  Swal.fire({
    imageUrl : 'https://img.freepik.com/vetores-gratis/gato-bonito-pulando-com-ilustracao-do-icone-do-arco-iris-e-da-nuvem-dos-desenhos-animados_138676-2822.jpg?t=st=1654011905~exp=1654012505~hmac=27efe8453b3c936f7347ba3b03c6dcce310c98e9f725c6ba47e696529cc4d66a&w=740',
    imageWidth: 320,
    imageHeight: 260,
    title: `<span><strong class="text-success">CADASTRA-SE NO </strong><strong class ="text-danger">AMO</strong><strong>PATAS</strong> (★ ω ★)</span>`,
    showConfirmButton: false,
    timer: 3000
  });
 }

  ToastSucess(){
    Swal.fire({
      position: 'top-end',
      imageUrl:'https://img.freepik.com/vetores-gratis/desenho-fofo-amigo-de-cao-e-gato_138676-2432.jpg?t=st=1654920826~exp=1654921426~hmac=c266c5284988baf3bd6cca8ed6796af063e502cfd42371c00ae4f6baf3a68837&w=740',
      imageWidth: 400,
      imageHeight: 320,
      title: `<strong><span class="uk-text-primary">${this.user.name?.toUpperCase()}</span></strong><strong><span class="uk-text-success"> CADASTRADO COM SUCESSO</span></strong> `,
      showConfirmButton: false,
      timer: 4500
    })
  }
}
