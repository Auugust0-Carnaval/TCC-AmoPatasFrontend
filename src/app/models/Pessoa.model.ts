import { Byte } from "@angular/compiler/src/util";

export interface Pessoa {
  IdPessoa? : number;
  nmPessoa : string;
  Email: string;
  DataNascimento : Date;
  Telefone : string;
  FotoPerfil : Byte;
  RedeSocial : string;
  Password : string; // senha de acesso
  Descricao : string;
}

