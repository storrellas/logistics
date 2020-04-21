import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDescargaComponent } from './lista-descarga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'

@NgModule({
  declarations: [ListaDescargaComponent],
  imports: [
    CommonModule,
    PorticCommonModule 
  ]
})
export class ListaDescargaModule { }

export { ListaDescargaComponent };