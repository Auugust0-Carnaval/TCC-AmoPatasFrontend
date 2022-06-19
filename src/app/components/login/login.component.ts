import { UserDataService } from './../../services/user-data.service';
import { AuthService } from './auth.service';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/User.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';

import * as $ from "jquery";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public usuario: any;

  public user : User = {
    email : '',
    senha : ''
  }

 public token : any;
 public newPass: any;



 constructor(private authService : AuthService, private userService : UserService, private userdata: UserDataService) { }

  ngOnInit(): void {
    console.log(this.userdata.getData());
  }

  LoginUser(){

    this.userdata.setData(this.usuario);
    this.userService.loginUsuario(this.user).subscribe(retorno =>{
      this.token = retorno;
    })

    this.userService.BuscaPorEmail(this.user.email).subscribe(retorno =>{
      this.usuario = retorno;
    })
    this.authService.fazerLogin(this.token);

    console.log(this.usuario);

    Swal.fire({
      title: `<img class="ui small centered circular image" src="http://localhost:3333/files/${this.usuario.imagem}">
              <span class = "uk-text-bolder text-primary">BEM VINDO AO AMOPATAS <span class= "uk-text-bolder uk-text-warning">${this.usuario.name.toUpperCase()}</span></span>`,
      showConfirmButton: false,
      timer : 5000

    })
  }


  RememberPass(){
    Swal.fire({
      title:`<h2>ESQUECI SENHA</h2><hr>`,
      focusConfirm: true,
      html: `
              <div class="ui large left  icon input">
                <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" [(ngModel)]="user.email"/>
                <i class="users icon" style="font-size:18px ;" ></i>
              </div><br><br>
              <div class="ui large left  icon input">
                <input type="password" class="form-control" name="senha" id="name" placeholder="Nova senha" [(ngModel)]="this.newPass"/>
                <i class="unlock icon" style="font-size:18px ;"></i>
              </div><br>`,
      confirmButtonText:'ENVIAR',
      confirmButtonColor:'orange'

    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire(`pora da senha ${this.newPass}`)
      }
    })
  }






}

