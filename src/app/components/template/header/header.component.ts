import { UserService } from './../../../services/user.service';
import { UserDataService } from './../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;



  constructor(private router : Router, private userdata : UserDataService, private userservice: UserService) { }

  ngOnInit(): void {
    this.user = this.userdata.getData();
  }

  exit(){
    Swal.fire({
      title: `<span class="text-success">${this.user.name.toUpperCase()}</span> QUER SAIR DO <b class = "text-danger">AMOPATAS</b>?`,
      imageUrl : 'https://img.freepik.com/vetores-gratis/cao-bonito-shiba-inu-com-ilustracao-dos-desenhos-animados-do-traje-japones_138676-2786.jpg?t=st=1654744620~exp=1654745220~hmac=04e632b264340206170321a1588cc78be5e5d80df46ea03058f6bb2bfb5bb1c7&w=740',
      imageWidth: 390,
      imageHeight: 330,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="thumbs up outline icon"></i>SIM',
      confirmButtonColor: '#16479d',
      cancelButtonText:
      '<i class="thumbs down outline icon" aria-hidden="true"></i> NAO!',
      cancelButtonColor: '#d33',
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire({
          imageUrl : '/assets/img/cute.jpg',
          imageWidth: 450,
          imageHeight: 340,
          // iconHtml: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
          title:' <strong>VOLTE SEMPRE À <strong class="text-danger">AMOPATAS!</strong></strong>  (. ❛ ᴗ ❛.)',
          timer: 4000,
          showCancelButton: false,
          showConfirmButton :false
        }),
        this.router.navigate(['login']);
      }
    })

  }

  deletePerfil(){
    Swal.fire({
      title: `<img class="ui small centered circular image" src="http://localhost:3333/files/${this.user.imagem}">`,
      html : `<strong><span class="text-danger">${this.user.name.toUpperCase()}</span><span class="text-muted"> QUER DELETAR SEU PERFIL?</span></strong>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="times icon"></i> SIM!',
      confirmButtonColor: '#d33',
      cancelButtonText:
      '<i class="flag outline icon" aria-hidden="true"></i> NAO!',
      cancelButtonColor: '#16479d',
    }).then((result)=>{

      if(result.isConfirmed){
        this.userservice.DeleteUser(this.user.id).subscribe(dados =>{console.log(dados);});
        Swal.fire({
          imageUrl : 'assets/img/notfound.jpg',
          imageWidth: 300,
          imageHeight: 240,
          title: `<span class = "text-success"><span class="text-danger">${this.user.name.toUpperCase()}</span> APAGADO COM SUCESSO</span>`,
          timer: 3000,
          showCancelButton: false,
          showConfirmButton :false
        })
        this.router.navigate(['login']);

      }
    })

  }
}
