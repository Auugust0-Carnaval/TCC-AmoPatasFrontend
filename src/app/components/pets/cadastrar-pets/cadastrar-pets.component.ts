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
    // imagem : '',
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
    });
    this.ToastSucess();
    console.log(this.pets); // TESTE NO CONSOLE DAS INFO
    // frm.reset();
  }

  ToastSucess(){
    Swal.fire({
      position: 'top-end',
      imageUrl : '/assets/img/funfo.jpg',
      imageWidth: 400,
      imageHeight: 340,
      title: `${this.pets.name} <strong>BEM VINDO AO<SPAN class ="text-danger">AMOPATAS</SPAN></strong> `,
      showConfirmButton: false,
      timer: 4500
    })
  }

  //METODO DE INSERIR IMAGEM
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
}

