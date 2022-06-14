import { UserDataService } from './../../services/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public user: any

  constructor(private userdata:  UserDataService) { }

  ngOnInit(): void {
    this.user = this.userdata.getData();
    console.log(this.user);
  }

}
