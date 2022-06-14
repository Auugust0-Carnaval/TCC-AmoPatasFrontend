import { UserDataService } from './../../../services/user-data.service';
import { Observable } from 'rxjs';
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


export class CadastrarPetsComponent implements OnInit {
  pets : any ={
    name: '',
    age : '',
    breed : '', // raca
    descricao : '',
    uf : '',
    sexo : '',
    porte :'',
    situacao : '',
    cidade: '',
  }


  public imagem : any

  public user: any

  constructor(private petService: PetService, private http: HttpClient, private userdata : UserDataService) { }
  ngOnInit(): void {
    this.user = this.userdata.getData();
    console.log(this.user);

  }

  cadastro(){

    if(!this.imagem){
      this.petService.NotImage();
      console.log(this.pets);
    }
    else if(this.pets.name == ""){
      this.petService.NameNull();
    }
    else if(this.pets.porte == ""){
      this.petService.PorteNull();
    }
    else if(this.pets.breed == ""){
      this.petService.BreedNull();
    }
    else if(this.pets.descricao == ""){
      this.petService.TextAreaNull();
    }
    else if(this.pets.sexo == ""){
      this.petService.SexNull();
    }
    else if(this.pets.uf == ""){
      this.petService.UfNull();
    }
    else{
      this.petService.cadastrar(this.pets, this.imagem).subscribe(retorno =>{
        this.pets = retorno;
        }),
        console.log(this.pets);

    }
  }

  selectedImage(event : any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imagem = file;
    }
    console.log(this.imagem);
  }

  //METODO DE INSERIR IMAGEMa
  inputFileChange(event:any)
  {
    if(event.target.files && event.target.files[0] )
    {
      const foto = event.target.files[0];

      this.pets.imagem = foto;
      const formData = new FormData();
      formData.append('imagem', foto);
    }
  }
}

