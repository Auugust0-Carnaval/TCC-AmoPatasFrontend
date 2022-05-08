import { UserService } from './../../../services/user.service';
import { User } from './../../../models/User.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { data } from 'jquery';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {


  //propriedade herdada da classe User
  user : User ={
    name : '',
    email : '',
    senha : '',
    // descricao : '',
    // telefone : '',
    data_nascimento : new Date(),
    // rede_social : '',
  }

  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
  }

  criar(){
    this.userService.cadastrarUsuario(this.user).subscribe(retorno =>{
      this.user = retorno;
    });
    this.ToastSucess();
    console.log(this.user); // TESTE NO CONSOLE DAS INFO
    // frm.reset();
  }

  validatePass(): void{

    if($("senha").val != $("confirmPassword").val){
      Swal.fire("Senha esta diferenter");
    }
  }





  ToastSucess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${this.user.name} cadastrado com sucesso (づ￣ 3￣)づ`,
      showConfirmButton: false,
      timer: 4500
    })
  }




}
