import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //variável que conterá a URL de onde ele irá buscar as informações do nossos pets;
  private URL: string = "http://localhost:5186/Pets"
  // criação da variável que irá fazer a auto instanciação do meu objeto HttpClient;
  constructor(private http: HttpClient) {}
  // métodos
  buscarTodos(){
    // método que iremos utilizar para buscar os dados dos nossos pets;
    return this.http.get(this.URL);
  }
}
