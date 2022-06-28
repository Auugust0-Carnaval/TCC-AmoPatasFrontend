import { UserDataService } from './../../services/user-data.service';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Pet } from './../../models/Pet.model';
import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: any

  public mensagem: any

  constructor(private petService : PetService, private solicitacaoservice: SolicitacaoService, private userData: UserDataService) { }

  ngOnInit(): void {
    this.usuario = this.userData.getData();
    this.SucessoSolicitacao();
  }


  async SucessoSolicitacao(){
    this.solicitacaoservice.UserIdSolic(this.usuario.id).subscribe(retorno =>{
      this.mensagem = retorno
    })

   await this.delay(5000);

    let soliciMensagem = this.mensagem.solicita;

    if(soliciMensagem[0].aprovado == true){
      Swal.fire({
        position:'top',
        title:`<br><i class="thumbtack icon" style="color:blue; font-size:55px"></i>',`,
        html: `<strong><span class ="text-warning">SOLICITAÇÃO FOI ACEITA PELO(A)</span><span class="text-danger"> ${this.mensagem.solicita[0].name_dono.toUpperCase()}</span></strong>`,
        showConfirmButton: false,
        timer:3000
      })

    }
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }


}
