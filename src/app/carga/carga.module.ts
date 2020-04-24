import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'

@NgModule({
  declarations: [CargaComponent],
  imports: [
    CommonModule,
    PorticCommonModule
  ]
})
export class CargaModule { }

export { CargaComponent } from './carga.component';
