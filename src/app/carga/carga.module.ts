import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputReadonlyComponent } from './input-readonly/input-readonly.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';


@NgModule({
  declarations: [CargaComponent, InputReadonlyComponent, InputSelectComponent, InputTextComponent],
  imports: [
    CommonModule,
    NgbModule,
    PorticCommonModule,
  ]
})
export class CargaModule { }

export { CargaComponent } from './carga.component';
