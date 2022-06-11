import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  inputs : ['nomecurso']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
