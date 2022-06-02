import { User } from './../../../models/User.model';
import { UserService } from './../../../services/user.service';
import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imagem: string = '';

  Pets : Pet[] = []

  Usuario : User[] = []

  public gfg = true;


  constructor(private petService : PetService, private user : UserService) { }

  ngOnInit(): void {
    this.BuscarPets(); // Ao iniciar a aplicação (COMPONENT) vai acionar o metodo de busca
    this.buscarUserId();
    console.log(this.Usuario);
  }

  BuscarPets() : void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    );

    console.log(this.Pets)
  }

   // AREA DE TESTE HEHE
   buscarUserId(){
    // const idUser = pets.user_id;
    this.user.buscardId(1).subscribe(retorno =>
      this.Usuario = retorno)
  }

  exibeinfo(pets : any){
    Swal.fire({
    title: `<h1><strong class="text-muted">${pets.name.toUpperCase()} DE</strong> <strong class="text-danger">AMOPATAS</strong></h1>`,
    html : `<div class ="container text-left" style="padding: 3%; border: solid; border-width:1px; border-color: blue; border-radius: 1%;">
                <span><strong class = "text-primary">DESCRICAO :</strong> ${pets.descricao.toUpperCase()}</span><br>
                <span><strong class = "text-danger">IDADE DO ${pets.name.toUpperCase()} : </strong>${pets.age}</span><br>
                <span><strong class = "text-warning">RAÇA : </strong>${pets.breed.toUpperCase()}</span><br>
                <span><strong class = "text-success">ESTADO QUE O ${pets.name.toUpperCase()} ESTÁ : </strong>${pets.uf.toUpperCase()}</span><br>
                <span><strong class = "text-primary">SEXO : </strong>${pets.sexo.toUpperCase()}</span><br>
                <span><strong class = "text-danger">PORTE : </strong>${pets.porte.toUpperCase()}</span><br>
                <span><strong class = "text-success">SITUACÃO DE ADOÇAO : </strong>${pets.situacao.toUpperCase()}</span><br>
            </div>`,
    showCloseButton: false,
    showCancelButton: false,
    showConfirmButton: false
    })
  }








}

