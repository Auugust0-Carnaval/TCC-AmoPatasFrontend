import { Pet } from './../../models/Pet.model';
import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Pets : Pet[] = []

  constructor(private petService : PetService) { }

  ngOnInit(): void {
    this.BuscarPets(); // Ao iniciar a aplicação (COMPONENT) vai acionar o metodo de busca
  }


  BuscarPets() : void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.Pets = retorno
    )
  }
}
