import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarPetsComponent } from './components/pets/cadastrar-pets/cadastrar-pets.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarrosselComponent } from './components/home/carrossel/carrossel.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { CadastroPessoaComponent } from './components/pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CardComponent } from './components/home/card/card.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule }from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
    FavoritosComponent,
    NotificacoesComponent,
    CadastroPessoaComponent,
    SobreNosComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    [SweetAlert2Module.forRoot()],
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
