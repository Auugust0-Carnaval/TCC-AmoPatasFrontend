import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/User.model';
import { Component, OnInit } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';

import * as $ from "jquery";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  login : User = {
    email : '',
    senha : ''
  }

  constructor(private http : HttpClient, private userService: UserService) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this.userService.loginUsuario(this.login).subscribe(retorno =>{
      this.login = retorno;
    });
    console.log(this.login);
  }


}
