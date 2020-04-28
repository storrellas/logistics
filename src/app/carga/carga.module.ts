import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga.component';


// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [CargaComponent],
  imports: [
    CommonModule,
    NgbModule,
    PorticCommonModule,
    FontAwesomeModule
  ]
})
export class CargaModule { }

export { CargaComponent } from './carga.component';
