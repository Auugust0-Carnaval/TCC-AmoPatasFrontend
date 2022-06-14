import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {
  public user: any;

  constructor(private userdata: UserDataService) { }

  ngOnInit(): void {
    this.user = this.userdata.getData();
    console.log(this.user);
  }

}
