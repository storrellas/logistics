import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescargaComponent } from './descarga.component';

// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DescargaComponent],
  imports: [
    CommonModule,
    NgbModule,
    PorticCommonModule,
    FontAwesomeModule
  ]
})
export class DescargaModule { }

export { DescargaComponent };