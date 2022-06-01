import { AuthService } from './components/login/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmoPatasFrontend';

  // mostrarMenu: boolean = false;

  // constructor(private authService : AuthService){

  // }

  // ngOnInit(){
  //    // qaundo iniicia a aplicacao (o site mesmo) ele executa o que voce fez no authservice
  //   this.authService.mostrarMenuEmitter.subscribe(
  //     mostrar => this.mostrarMenu = mostrar
  //   );
  // }
}
