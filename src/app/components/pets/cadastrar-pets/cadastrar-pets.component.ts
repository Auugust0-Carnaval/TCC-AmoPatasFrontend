import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Pet } from './../../../models/Pet.model';
import { PetService } from './../../../services/pet.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})
export class CadastrarPetsComponent implements OnInit {
  // nmRaca : string = ""; // o que é isso kakakak queria testar aglo
  constructor(private PetService: PetService, private http: HttpClient) { }

  ngOnInit(): void {
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

