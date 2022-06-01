import { UserService } from './../../services/user.service';
import { User } from './../../models/User.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private usuarioAutenticado: boolean = false;

    private jwt : any;



    mostrarMenuEmitter = new EventEmitter<boolean>(); // isso é pra nao mostrar o =menu pro usuario no caso a nav bar



  constructor(private router: Router, private userService : UserService) { }


  fazerLogin(user : any){


    this.jwt = user;

    console.log(this.jwt);





    if(this.jwt)
    {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      console.log('funfo')
      this.router.navigate(['/home']);
    } else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

      // Swal.fire({
      //   title : `<span class = "text-sucess"><strong class="text-danger">${user.email.toUpperCase()}</strong> NÃO POSSUI CADASTRO</span>`,
      //   timer: 5000,
      // showConfirmButton: false

      // });

      console.log('nao funfo')
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
