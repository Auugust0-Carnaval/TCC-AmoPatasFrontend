import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user : User ={
    name : 'Augusto',
    email : '',
    senha : '',
    descricao : '',
    telefone : '',
    data_nascimento : new Date(),
    rede_social : '',
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  inputFileChange(event:any)
  {

    if(event.target.files && event.target.files[0] )
    {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('http://locahost:3333/xyz', formData)
      .subscribe(resposta => console.log('upload ok'));
    }
  }


  upload(){
    Swal.fire({
      text : `${this.user.name} alterado com sucesso (o゜▽゜)o☆`
    })
  }



}
