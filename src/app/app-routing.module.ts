import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { LoginComponent } from './login/login.module'
import { BaseComponent } from './portic-common/portic-common.module'
import { ListaComponent } from './lista/lista.module'
import { ListaCargaComponent } from './lista-carga/lista-carga.module'
import { ListaDescargaComponent } from './lista-descarga/lista-descarga.module'
import { PreferenciasComponent } from './preferencias/preferencias.module'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'base', component: BaseComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'lista/carga', component: ListaCargaComponent },
  { path: 'lista/descarga', component: ListaDescargaComponent },
  { path: 'preferencias', component: PreferenciasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
