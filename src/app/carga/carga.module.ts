import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga.component';

// Components
import { InputReadonlyComponent } from './input-readonly/input-readonly.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CargaComponent, InputReadonlyComponent, InputSelectComponent, InputTextComponent],
  imports: [
    CommonModule,
    NgbModule,
    PorticCommonModule,
    FontAwesomeModule
  ]
})
export class CargaModule { }

export { CargaComponent } from './carga.component';
