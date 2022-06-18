import { PetService } from 'src/app/services/pet.service';
import { UserDataService } from './../../services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  inputs : ['nomecurso']
})
export class PerfilComponent implements OnInit {

  public user: any;

  Pets: Pet[] = []

  public gfg = true;

  constructor(private userdata: UserDataService, private petservice: PetService ) { }

  ngOnInit(): void {
    this.user = this.userdata.getData(); // no perfil retorno ele no get
    this.GetPeUser();
  }

  GetPeUser(){
    this.petservice.buscarId(this.user.id).subscribe(retorno =>{
      this.Pets = retorno
    })
  }

  deletePet(petid: any){
    Swal.fire({
      icon:'error',
      title: `<strong><span class="uk-text-warning">DESEJA REALMENTE DELETAR O <span class="uk-text-danger">${petid.name.toUpperCase()}</span>?</span></strong>`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText:
        '<i class="times icon"></i>SIM!',
      confirmButtonColor: '#d33',
      cancelButtonText:
      '<i class="flag outline icon" aria-hidden="true"></i>NAO!',
      cancelButtonColor: '#16479d',
    }).then((result)=>{

      if(result.isConfirmed){
        this.petservice.DeletePet(petid).subscribe(dados =>{console.log(dados); this.GetPeUser()});
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
