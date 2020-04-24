import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescargaComponent } from './descarga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'

@NgModule({
  declarations: [DescargaComponent],
  imports: [
    CommonModule,
    PorticCommonModule 
  ]
})
export class DescargaModule { }

export { DescargaComponent };