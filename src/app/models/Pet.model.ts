export interface Pet{
  //Propriedades mudadas
  name: string;
  age: any;
  breed: string;
  imagem?: FileList;
  descricao: string;
  uf: string;
  sexo: string;
  porte: string;
  situacao: string;
  createdAt? : string;
  user_id?: any;
}
