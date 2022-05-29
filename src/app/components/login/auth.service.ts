import { UserService } from './../../services/user.service';
import { User } from './../../models/User.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private usuarioAutenticado: boolean = false;


    mostrarMenuEmitter = new EventEmitter<boolean>(); // isso é pra nao mostrar o =menu pro usuario no caso a nav bar



  constructor(private router: Router, private userService : UserService) { }


  fazerLogin(user : User){
    if(user.email === 'usuario@email.com' &&
    user.senha === '12345')
    {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      console.log('funfo')
      this.router.navigate(['/home']);
    } else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

      console.log('nao funfo')
    }
    console.log(user);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
