import { CadastrarPetsComponent } from './components/pets/cadastrar-pets/cadastrar-pets.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   { path: 'home', component: HomeComponent},
   { path: 'home/perfil', component: PerfilComponent},
   { path: 'home/perfil/pets/cadastrar-pets', component: CadastrarPetsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
