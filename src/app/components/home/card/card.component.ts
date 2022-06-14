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

  deletePet(petid: any){
    Swal.fire({
      icon:'error',
      title: `<strong><span class="uk-text-warning">DESEJA REALMENTE DELETAR O <span class="uk-text-danger">${petid.name.toUpperCase()}</span>?</span></strong>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="thumbs up outline icon"></i> SIM!',
      cancelButtonText:
        '<i class="thumbs down outline icon" aria-hidden="true"></i> NAO!'
    }).then((result)=>{

      if(result.isConfirmed){
        this.petService.DeletePet(petid).subscribe(dados =>{console.log(dados); this.BuscarPets()});
        Swal.fire({
          imageUrl : 'assets/img/notfound.jpg',
          imageWidth: 300,
          imageHeight: 240,
          title: `<span class = "text-success"><span class="text-danger">${petid.name.toUpperCase()}</span> APAGADO COM SUCESSO</span>`,
          timer: 3000,
          showCancelButton: false,
          showConfirmButton :false
        })


      }
    })
  }
}

