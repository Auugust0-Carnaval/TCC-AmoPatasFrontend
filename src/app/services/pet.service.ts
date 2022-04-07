import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //variável que conterá a URL de onde ele irá buscar as informações do nosso produto.
  private URL: string = ""

  constructor() { }
  // métodos
  buscarTodos(){
    // desenvolvimento
  }
}
