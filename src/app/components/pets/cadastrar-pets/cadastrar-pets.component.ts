import { Pet } from './../../../models/Pet.model';
import { PetService } from './../../../services/pet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})
export class CadastrarPetsComponent implements OnInit {

  listaPets: Pet[] = []; // aqui é um array conjutno de informações da classe pets pode deixar bêe não fao diea

  constructor(private petService: PetService ) { }

  ngOnInit(): void {
    this.carregarPets();
  }


  carregarPets() : void
  {

    this.petService.buscarTodos().subscribe(returno => [
      this.listaPets = returno
    ])
  };


}
