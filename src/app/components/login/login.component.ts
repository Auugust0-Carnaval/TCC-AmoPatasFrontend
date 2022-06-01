import { AuthService } from './auth.service';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/User.model';
import { Component, OnInit } from '@angular/core';

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



 public user : User = {
  email : '',
  senha : ''
}

 public token : any;

  constructor(private authService : AuthService, private userService : UserService) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this.userService.loginUsuario(this.user).subscribe(retorno =>{
      this.token = retorno;
    })

    // console.log(this.user);
    this.authService.fazerLogin(this.token);
  }




}

