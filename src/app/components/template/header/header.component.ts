import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exit(){
    Swal.fire({
      title: '<strong>QUER SAIR?</u></strong>',
      icon: 'info',
      html:
        'GOSTOU DA EXPERIÊNCIA COM <b>AMOPATAS?</b>, ',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> ADOREI! 〜(￣▽￣〜)',
      cancelButtonText:
        '<i class="fa fa-thumbs-down" aria-hidden="true"></i> ODIEI!（︶^︶)'
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire({
          iconHtml: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
          title:' <strong>VOLTE SEMPRE À <strong class="text-danger">AMOPATAS!</strong></strong>  (. ❛ ᴗ ❛.) '
        })
      }
      else if(result.isDenied){
        Swal.fire({
          iconHtml : '<i class="fa fa-frown-o" aria-hidden="true"></i>',
          title: 'IREMOS MELHORAR NOSSO PROJETO (。_。)'
        })
      }
    })

  }

}
