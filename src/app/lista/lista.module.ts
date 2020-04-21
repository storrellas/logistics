import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista.component';

// imports
import { PorticCommonModule } from '../portic-common/portic-common.module';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    PorticCommonModule
  ]
})
export class ListaModule { }

export { ListaComponent };
