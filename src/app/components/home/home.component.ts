import { Pet } from './../../models/Pet.model';
import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListaPet : Pet[] = []

  constructor(private petService : PetService) { }

  ngOnInit(): void {
  }


  QueryAll() : void{
    this.petService.buscarTodos().subscribe(retorno =>
      this.ListaPet = retorno
    )
  }
}
