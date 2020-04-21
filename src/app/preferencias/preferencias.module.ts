import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PreferenciasComponent } from './preferencias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'


@NgModule({
  declarations: [PreferenciasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    PorticCommonModule
  ],
  exports: [PreferenciasComponent]
})
export class PreferenciasModule { }

export { PreferenciasComponent }; 