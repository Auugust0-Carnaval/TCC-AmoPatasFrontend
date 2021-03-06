import { AuthGuard } from './account/shared/auth.guard';
import { AuthService } from './components/login/auth.service';
import { materialize } from 'rxjs';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputHarness} from '@angular/material/input/testing';

import { HeaderComponent } from './components/template/header/header.component';



// import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarPetsComponent } from './components/pets/cadastrar-pets/cadastrar-pets.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarrosselComponent } from './components/home/carrossel/carrossel.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { CadastroPessoaComponent } from './components/pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CardComponent } from './components/home/card/card.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptor } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

import { EditarPerfilComponent } from './components/pessoa/editar-perfil/editar-perfil.component';
import { EditarPetsComponent } from './components/pets/cadastrar-pets/editar-pets/editar-pets.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CadastrarPetsComponent,
    PerfilComponent,
    CarrosselComponent,
    NotificacoesComponent,
    CadastroPessoaComponent,
    SobreNosComponent,
    CardComponent,
    EditarPerfilComponent,
    EditarPetsComponent,
    SolicitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    [SweetAlert2Module.forRoot()],
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    // MatInputHarness

  ],
  providers: [UserService, AuthService, AuthGuard],


  bootstrap: [AppComponent]
})
export class AppModule { }
