export interface Pet{
  //Propriedades mudadas
  id?:any;
  name: string;
  age: any;
  breed: string;
  imagem?: File;
  descricao: string;
  uf: string;
  sexo: string;
  porte: string;
  situacao: string;
  createdAt? : string;
  user_id?: any;
}
