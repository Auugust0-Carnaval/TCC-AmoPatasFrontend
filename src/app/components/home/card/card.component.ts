import { Router } from '@angular/router';
import { User } from './../../../models/User.model';
import { UserService } from './../../../services/user.service';
import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public Pets: any;

  public usuario: any;

  public userAutentic: any;

  public gfg = true;

  public templateName = true;



  constructor(private petService : PetService, private user : UserService, private router : Router, private userdata: UserDataService) { }

  ngOnInit(): void {
    this.BuscarPets();
    this.userAutentic = this.userdata.getData();
  }

   BuscarPets(): void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    );
  }

   async userId(userId:any){
    this.user.buscardId(userId).subscribe(retorno =>{
      this.usuario = retorno;
    });

    return this.usuario;
  }


  AdotarPet(Pet: any, UserPet: any){
    Swal.fire({
      title:`
      <strong class="text-danger"><span class="text-primary">QUER SOLICITAR ADOÇÃO DO </span>${Pet.name.toUpperCase()}?</strong>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="share icon"></i>SIM!',
      confirmButtonColor: '#16479d',
      cancelButtonText:
      '<i class="times icon" aria-hidden="true"></i>NAO!',
      cancelButtonColor: '#d33'
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire({
        title:`
        <strong class="text-sucess"><span class="text-primary">SOLICITAÇÃO ENVIADA PARA </span>${UserPet.name.toUpperCase()}!!</strong>`,
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton:false,
        timer:1450
        })

      }
    })

  }




  //TODO DEIXA ESSE METODO AQUI
  // private delay(ms: number): Promise<boolean> {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, ms);
  //   });
  // }

}

