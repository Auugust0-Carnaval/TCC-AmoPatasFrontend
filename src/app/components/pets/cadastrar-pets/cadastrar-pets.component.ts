import { CategoriaService } from './../../../services/categoria.service';
import { SexoService } from './../../../services/sexo.service';
import { PorteService } from './../../../services/porte.service';
import { PessoaService } from './../../../services/pessoa.service';
import { Byte } from '@angular/compiler/src/util';
import { Pessoa } from './../../../models/Pessoa.model';
import { Categoria } from './../../../models/Categoria.model';
import { Situacao } from './../../../models/Situacao.model';
import { Porte } from './../../../models/Porte.model';
import { Sexo } from './../../../models/Sexo.model';
import { Raca } from './../../../models/Raca.model';
import { RacaService } from './../../../services/raca.service';
import Swal from 'sweetalert2';
import { Pet } from './../../../models/Pet.model';
import { PetService } from './../../../services/pet.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { now } from 'jquery';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-pets',
  templateUrl: './cadastrar-pets.component.html',
  styleUrls: ['./cadastrar-pets.component.css']
})
export class CadastrarPetsComponent implements OnInit {



  listaPets: Pet[] = []; // aqui é um array conjutno de informações da classe pets pode deixar bêe não fao diea
  listaRaca: Raca[] = []; // é onde vem as informações do banco e fica armazenadas nesse array
  listaPorte: Porte[] = [];
  listaCategoria: Categoria[] = [];
  listaSexo: Sexo[] = [];
  listaPessoa: Pessoa[] = [];


  pet: Pet = {
    nmAnimal: 'bysteka',//
    dsAnimal: 'ele é super fofo',//
    dtPublicacao: new Date("2022-02-22"),//
    dtAdocao: new Date("2022-02-22"),//
    cdAnimal: 'São Paulo',//
    UfAnimal: 'SP',//'
    Idade: 8,//
    IdPorte: 1, //
    IdPessoa: 1,
    IdRaca: 1, //
    IdCategoria: 1,//
    IdSituacao: 1,//
    IdSexo : 1,//
    IdDoador: 1, //
    IdTutor: 1//
  };

  raca : Raca = {
    dsRaca : '',
    IdCategoria: 0,
    IdRaca : 0
  };

  sexo : Sexo = {
    IdSexo : 0,
    dsSexo : ""
  };

  porte : Porte = {
    IdPorte : 0,
    dsPorte : ""
  };

  categoria : Categoria = {
    IdCategoria : 0,
    dsCategoria : ""
  };

  pessoa : Pessoa = {
    nmPessoa : "",
    Email : "",
    Telefone : "",
    Password : "",
    DataNascimento : new Date(),
    Descricao : "",
    RedeSocial : "",
    FotoPerfil : 0
  }




  // nmRaca : string = ""; // o que é isso kakakak queria testar aglo

  constructor(private PetService: PetService, private router: Router, private RacaService: RacaService, private PessoaService : PessoaService,  private PorteService : PorteService, private SexoService: SexoService , private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  /*carregarPets() : void
  {
    this.PetService.buscarTodos().subscribe(returno => [
      this.listaPets = returno
    ])
  };*/


  salvarPet(): void {
    this.PetService.cadastrar(this.pet).subscribe(retorno => {
      this.pet = retorno;
      this.exibirSucesso();
    });
  }
  exibirSucesso()
  {
     //`${this.pet.nmAnimal} foi cadastrado com sucesso. ID: ${this.pet.IdAnimal}`,
    Swal.fire(`${this.pet.nmAnimal} foi cadastrado com sucesso. ID: ${this.pet.IdAnimal}`);
  }

  carregarRaca() : void
{
 this.RacaService.buscarTodos().subscribe(ra => [
   this.listaRaca = ra
 ])
};

  salvaRaca() : void{

    this.RacaService.cadastrar(this.raca).subscribe(retorno => {
      this.raca = retorno;
   });
 }


 carregarPorte() : void
 {
   this.PorteService.buscarTodos().subscribe(por => [
     this.listaPorte = por
   ])
 };

 salvaPorte() : void{

  this.PorteService.cadastrar(this.porte).subscribe(retorno => {
    this.porte = retorno;
 });
}


carregarSexo() : void
{
 this.SexoService.buscarTodos().subscribe(sex => [
   this.listaSexo = sex
 ])
};

salvaSexo() : void{

  this.SexoService.cadastrar(this.sexo).subscribe(retorno => {
    this.sexo = retorno;
 });
}

carregarCategoria() : void
{
 this.CategoriaService.buscarTodos().subscribe(cat => [
   this.listaCategoria = cat
 ])
};

salvaCategoria() : void{

  this.CategoriaService.cadastrar(this.categoria).subscribe(retorno => {
    this.categoria = retorno;
 });
}

carregarPessoa() : void
{
 this.PessoaService.buscarTodos().subscribe(pessoa => [
   this.listaPessoa = pessoa
 ])
};

salvaPessoa() : void{

  this.PessoaService.cadastrar(this.pessoa).subscribe(retorno => {
    this.pessoa = retorno;
 });
}

}

