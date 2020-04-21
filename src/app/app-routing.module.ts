import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.module'
 
import { LoginComponent } from './login/login.module'
import { BaseComponent } from './portic-common/portic-common.module'
import { ListaComponent } from './lista/lista.module'
import { ListaCargaComponent } from './lista-carga/lista-carga.module'
import { ListaDescargaComponent } from './lista-descarga/lista-descarga.module'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'base', component: BaseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'lista/carga', component: ListaCargaComponent },
  { path: 'lista/descarga', component: ListaDescargaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
