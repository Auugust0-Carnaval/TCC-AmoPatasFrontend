import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Pet } from './../../../models/Pet.model';
import { PetService } from './../../../services/pet.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})
export class CadastrarPetsComponent implements OnInit {
  pets : Pet ={
    name: '',
    age : 0,
    breed : "", // raca
    imagem : '',
    descricao : '',
    uf : '',
    sexo : '',
    porte :'',
    situacao : ''
  }

  constructor(private PetService: PetService, private http: HttpClient) { }
  ngOnInit(): void {

  }

  cadastro(){
    this.PetService.cadastrar(this.pets).subscribe(retorno =>{
    this.pets = retorno;
    }),


    // this.ToastSucess();
    console.log(this.pets);
    // frm.reset();
  }



  //METODO DE INSERIR IMAGEMa
  inputFileChange(event:any)
  {
    if(event.target.files && event.target.files[0] )
    {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('http://localhost:3333/users/1/pets', formData)
      .subscribe(resposta => console.log('upload ok'));
    }


  }


}

