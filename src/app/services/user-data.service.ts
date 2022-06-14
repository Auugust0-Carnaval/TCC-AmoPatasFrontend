import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private dataUser: any;

  setData(newData: any){
    this.dataUser = newData;
  }

  getData(){
    return this.dataUser;
  }




}
