import { Router } from '@angular/router';
import { User } from './../../../models/User.model';
import { UserService } from './../../../services/user.service';
import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public Pets: any;

  public usuario: any;


  public gfg = true;



  constructor(private petService : PetService, private user : UserService, private router : Router) { }

  ngOnInit(): void {
    this.BuscarPets();
    this.userId();
  }

   BuscarPets(): void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    );
  }

   async userId(){
    await this.delay(200);

    this.user.buscardId(this.Pets).subscribe(retorno =>
      this.usuario = retorno);
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}

