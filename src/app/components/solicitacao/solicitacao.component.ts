import { EMPTY } from 'rxjs';
import { PetService } from './../../services/pet.service';
import { UserDataService } from './../../services/user-data.service';
import { UserService } from './../../services/user.service';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  public solicitacao: any;
  public usuarioAutentic: any;
  public userSolicitado : any;
  public pet: any;
  public aprovado: any;

  public usuario: any;


  constructor(private solicitacaoservice:  SolicitacaoService,private userservice: UserService, private UserdataService: UserDataService, private petservice: PetService) { }

  ngOnInit(): void {
    this.usuarioAutentic = this.UserdataService.getData();
    this.SelectSolic();
  }


  async SelectSolic(){


    this.solicitacaoservice.BuscaSolici(this.usuarioAutentic.id).subscribe(retorno =>{
      this.solicitacao = retorno;
    })



    await this.delay(300);

    this.aprovado = this.solicitacao[0].aprovado;



    if(this.solicitacao == undefined){
      this.approvedBollean();
    }
    else if(this.solicitacao == 0 || this.solicitacao == null){
      this.approvedBollean();
    }

    else if(this.aprovado == true){
      this.approvedBollean();
    }
  }

  async userId(userId:any){
    this.userservice.buscardId(userId).subscribe(retorno =>{
      this.usuario = retorno;
    });

    return this.usuario;
  }

  async TrueSoli(userSolicita: any){
    this.aprovadoTrue(userSolicita.name_solicita);

    this.solicitacaoservice.AproSolici(userSolicita.id).subscribe(retono=>{
      retono = retono
    })

    // this.petservice.DeletePet(userSolicita.pets_id).subscribe(retorno =>{
    //   retorno = retorno
    // })

    // await this.delay(400);

    // this.solicitacaoservice.deleteSoli(userSolicita.id).subscribe(retorno =>{
    //   retorno = retorno
    // })

    await this.delay(3500);
    this.SelectSolic();


  }

  async FalseSoli(user: any){
    this.reprovadoTrue(user.name_solicita);

    this.solicitacaoservice.RecuSolici(user.id).subscribe(retono=>{
      retono = retono
    })

    this.solicitacaoservice.deleteSoli(user.id).subscribe(retorno =>{
      retorno = retorno
    })

    await this.delay(3500);
    this.SelectSolic();

  }


  reprovadoTrue(name: any){
    Swal.fire({
      title: '<br><i class="handshake outline icon" style="color:blue; font-size:55px"></i>',
      html: `<strong class = "text-primary">VOCE RECUSOU SOLICITAÇÃO DE ADOCAO DO <span class="text-danger">
      ${name.toUpperCase()}</span></strong>`,
      showConfirmButton: false,
      timer: 3000
    })
  }

  aprovadoTrue(name: any){
    Swal.fire({
      title: '<br><i class="handshake outline icon" style="color:blue; font-size:55px"></i>',
      html: `<strong class = "text-primary">SOLICITAÇÃO DE ADOÇÃO DE <span class="text-danger">${name.toUpperCase()}</span> FOI ACEITA</strong>`,
      timer: 3000,
      showConfirmButton: false,
    })

  }


  approvedBollean(){
    Swal.fire({
      title: '<br><i class="bell slash outline icon" style="color:red; font-size:55px"></i>',
      html: '<strong class = "text-warning">NENHUMA NOTIFICACÃO DE ADOÇÃO</strong>',
      timer: 3000,
      showConfirmButton:false
    })
  }



  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }




}
