import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Pet } from './../../../models/Pet.model';
import { PetService } from './../../../services/pet.service';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})


@Input()
export class CadastrarPetsComponent implements OnInit {
  pets : any ={
    name: '',
    age : 0,
    breed : "", // raca
    imagem : File,//meu deus :9
    descricao : '',
    uf : '',
    sexo : '',
    porte :'',
    situacao : ''
  }

 private imagens : any

  constructor(private PetService: PetService, private http: HttpClient) { }
  ngOnInit(): void {

  }

  cadastro(){
    const formData = new FormData();
    formData.append('imagem', this.pets.imagem[0]);
    this.PetService.cadastrar(this.pets).subscribe(retorno =>{
    this.pets = retorno;
    }),
    console.log(this.pets);
  }

  selectedImage(event : any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.pets.imagem = file;
    }
    console.log(this.pets.imagem);
  }


  fileUpload(event : any){
    this.pets.imagem = event.target.files[0];
  }



  //METODO DE INSERIR IMAGEMa
  inputFileChange(event:any)
  {
    if(event.target.files && event.target.files[0] )
    {
      const foto = event.target.files[0];

      this.pets.imagem = foto;
      const formData = new FormData();
      formData.append('foto', foto);
    }
  }



  enviarfoto(){
    const formData = new FormData();

    this.imagens = this.pets.imagem;
    formData.append('imagem', this.imagens);
    this.pets.imagem = this.imagens;

    console.log(this.imagens);
  }
}

