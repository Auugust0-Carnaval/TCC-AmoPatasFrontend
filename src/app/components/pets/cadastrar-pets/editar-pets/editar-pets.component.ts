import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-editar-pets',
  templateUrl: './editar-pets.component.html',
  styleUrls: ['./editar-pets.component.css']
})
export class EditarPetsComponent implements OnInit {

  pets : any ={
    name: '',
    age : 0,
    breed : '', // raca
    descricao : '',
    uf : '',
    sexo : '',
    porte :'',
    situacao : ''
  }

 public imagem : any

  constructor(private petService: PetService, private http: HttpClient) { }
  ngOnInit(): void {
  }

  atualizar(){

    if(!this.imagem){
      this.petService.NotImage();
    }
    else if(this.pets.name == ""){
      this.petService.NameNull();
    }
    else if(this.pets.porte == ""){
      this.petService.PorteNull();
    }
    else if(this.pets.breed == ""){
      this.petService.BreedNull();
    }
    else if(this.pets.descricao == ""){
      this.petService.TextAreaNull();
    }
    else if(this.pets.sexo == ""){
      this.petService.SexNull();
    }
    else if(this.pets.uf == ""){
      this.petService.UfNull();
    }
    else{
      this.petService.cadastrar(this.pets, this.imagem).subscribe(retorno =>{
        this.pets = retorno;
        }),
        console.log(this.pets);
    }
  }

  selectedImage(event : any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.imagem = file;
    }
    console.log(this.imagem);
  }

  //METODO DE INSERIR IMAGEMa
  inputFileChange(event:any)
  {
    if(event.target.files && event.target.files[0] )
    {
      const foto = event.target.files[0];

      this.pets.imagem = foto;
      const formData = new FormData();
      formData.append('imagem', foto);
    }
  }
}
