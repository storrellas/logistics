import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCargaComponent } from './lista-carga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'

@NgModule({
  declarations: [ListaCargaComponent],
  imports: [
    CommonModule,
    PorticCommonModule
  ]
})
export class ListaCargaModule { }

export { ListaCargaComponent } from './lista-carga.component';
