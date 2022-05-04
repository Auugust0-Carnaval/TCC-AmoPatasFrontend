import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkSenha()
  {
    if($("senha") == null)
    {
      Swal.fire({
        icon: 'warning',
        title: 'Insira uma senha',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }




}
