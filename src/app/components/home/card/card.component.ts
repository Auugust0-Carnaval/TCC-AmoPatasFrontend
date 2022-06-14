import { Router } from '@angular/router';
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


  Pets: Pet[] = []

  usuario : User[] = []


  public gfg = true;


  constructor(private petService : PetService, private user : UserService, private router : Router) { }

  ngOnInit(): void {
    this.BuscarPets();
    this.userId();
  }

  BuscarPets() : void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    );
  }

  userId(){
    let petuser = 1;
    this.user.buscardId(petuser).subscribe(retorno =>
      this.usuario = retorno);

  }
}

