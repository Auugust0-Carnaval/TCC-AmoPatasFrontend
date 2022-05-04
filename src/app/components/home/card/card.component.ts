import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/Pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() foto: string = '';

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
