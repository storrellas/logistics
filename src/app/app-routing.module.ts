import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { LoginComponent } from './login/login.module'
import { BaseComponent } from './portic-common/portic-common.module'
import { DocumentListComponent } from './document-list/document-list.module'
import { CargaComponent } from './carga/carga.module'
import { DescargaComponent } from './descarga/descarga.module'
import { PreferenciasComponent } from './preferencias/preferencias.module'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'base', component: BaseComponent },
  { path: 'document/list', component: DocumentListComponent },
  { path: 'carga', component: CargaComponent },
  { path: 'descarga', component: DescargaComponent },
  { path: 'preferencias', component: PreferenciasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
