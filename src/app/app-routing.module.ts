import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { CadastrarPetsComponent } from './components/pets/cadastrar-pets/cadastrar-pets.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroPessoaComponent } from './components/pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'pets', component: CadastrarPetsComponent },
  { path: 'favoritos', component: FavoritosComponent},
  { path: 'notificacoes', component: NotificacoesComponent},
  { path: 'cadastro', component: CadastroPessoaComponent},
  {  path: 'sobre', component: SobreNosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
