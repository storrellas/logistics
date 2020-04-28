import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga.component';


// Import
import { PorticCommonModule } from '../portic-common/portic-common.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerListComponent } from './container-list/container-list.component';
import { RodadoListComponent } from './rodado-list/rodado-list.component';


@NgModule({
  declarations: [CargaComponent, ContainerListComponent, RodadoListComponent],
  imports: [
    CommonModule,
    NgbModule,
    PorticCommonModule,
    FontAwesomeModule
  ]
})
export class CargaModule { }

export { CargaComponent } from './carga.component';
