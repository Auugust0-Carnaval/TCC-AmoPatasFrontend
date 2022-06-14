import { UserDataService } from './../../services/user-data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  inputs : ['nomecurso']
})
export class PerfilComponent implements OnInit {

  public user: any;

  constructor(private userdata: UserDataService) { }

  ngOnInit(): void {
    this.user = this.userdata.getData();
    console.log(this.user);
  }
}
