import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferenciasComponent } from './preferencias.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'


@NgModule({
  declarations: [PreferenciasComponent],
  imports: [
    CommonModule,
    PorticCommonModule
  ]
})
export class PreferenciasModule { }

export { PreferenciasComponent }; 