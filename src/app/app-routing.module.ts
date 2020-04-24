import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { LoginComponent } from './login/login.module'
import { BaseComponent } from './portic-common/portic-common.module'
import { ListaComponent } from './lista/lista.module'
import { CargaComponent } from './carga/carga.module'
import { DescargaComponent } from './descarga/descarga.module'
import { PreferenciasComponent } from './preferencias/preferencias.module'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'base', component: BaseComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'lista/carga', component: CargaComponent },
  { path: 'lista/descarga', component: DescargaComponent },
  { path: 'preferencias', component: PreferenciasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
