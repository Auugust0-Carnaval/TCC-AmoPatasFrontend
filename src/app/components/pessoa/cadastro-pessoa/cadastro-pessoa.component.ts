import { UserService } from './../../../services/user.service';
import { User } from './../../../models/User.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from 'jquery';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {


  user : User ={
    name : '',
    email : '',
    senha : '',
    descricao : '',
    telefone : '',
    data_nascimento : '',
    rede_social : '',
  }




  constructor(private userService : UserService) {
  }
  ngOnInit(): void {

  }


  // salvarUsuario(): void{
  //   this.userService.cadastrarUsuario(this.user).subscribe(retorno =>{
  //     this.user = retorno;
  //   })
  // }


  criar(){
    this.userService.cadastrarUsuario(this.user).subscribe(retorno =>{
      this.user = retorno;
    });
    console.log(this.user);
    // frm.reset();
  }
}
