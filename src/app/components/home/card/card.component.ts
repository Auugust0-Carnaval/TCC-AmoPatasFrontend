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


  Pets : Pet[] = []

  usuario : User[] = []


  public gfg = true;


  constructor(private petService : PetService, private user : UserService) { }

  ngOnInit(): void {
    this.BuscarPets(1);
    console.log(this.usuario);
  }

  BuscarPets(usuarioPet : any) : void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    );

    this.user.buscardId(usuarioPet).subscribe(retorno =>{
      this.usuario = retorno;
    })

    console.log(this.usuario);
    console.log(this.Pets)
  }
}

