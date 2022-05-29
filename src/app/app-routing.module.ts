import { AuthGuard } from './account/shared/auth.guard';
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
import { EditarPerfilComponent } from './components/pessoa/editar-perfil/editar-perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: CadastrarPetsComponent, canActivate: [AuthGuard]},
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  { path: 'notificacoes', component: NotificacoesComponent , canActivate: [AuthGuard]},
  { path: 'cadastro', component: CadastroPessoaComponent},
  { path: 'sobre', component: SobreNosComponent, canActivate: [AuthGuard]},
  { path: 'editar', component: EditarPerfilComponent, canActivate: [AuthGuard]},
  {path : '**',component:LoginComponent} // DIGITAR UM ENDPOINT "QUALQUER" VOLTA PARA LOGIN
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
