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
}

