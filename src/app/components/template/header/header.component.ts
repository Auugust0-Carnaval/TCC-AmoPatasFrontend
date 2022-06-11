import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  exit(){
    Swal.fire({
      title: '<strong>QUER SAIR?</u></strong>',
      imageUrl : 'https://img.freepik.com/vetores-gratis/cao-bonito-shiba-inu-com-ilustracao-dos-desenhos-animados-do-traje-japones_138676-2786.jpg?t=st=1654744620~exp=1654745220~hmac=04e632b264340206170321a1588cc78be5e5d80df46ea03058f6bb2bfb5bb1c7&w=740',
      imageWidth: 390,
      imageHeight: 330,
      html:
        'GOSTOU DA EXPERIÊNCIA COM <b class = "text-danger">AMOPATAS</b>? ',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="thumbs up outline icon"></i> ADOREI!',
      cancelButtonText:
        '<i class="thumbs down outline icon" aria-hidden="true"></i> ODIEI!'
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
      else if(result.isDismissed){
        Swal.fire({
          imageUrl : '/assets/img/cat.jpg',
          imageWidth: 450,
          imageHeight: 340,
          title: 'IREMOS MELHORAR NOSSO PROJETO (。_。)',
          timer: 4000,
          showCancelButton: false,
          showConfirmButton :false
        })
        this.router.navigate(['login']); // ROUTERLINK
      }
    })

  }

}
