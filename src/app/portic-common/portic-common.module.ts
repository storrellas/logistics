import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Declarations
import { ModalComponent } from './modal/modal.component';
import { BaseComponent } from './base/base.component';
import { TableComponent, Row, RowArrayUtils } from './table/table.component'
import { InputReadonlyComponent } from './input-readonly/input-readonly.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ContainerListComponent } from './container-list/container-list.component';
import { RodadoListComponent } from './rodado-list/rodado-list.component';
import { DocumentComponent } from './document/document.component';


// Imports - Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Providers
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BaseComponent,
    ModalComponent,
    TableComponent,
    InputReadonlyComponent,
    InputSelectComponent,
    InputTextComponent,
    ContainerListComponent,
    RodadoListComponent,
    DocumentComponent,
  ],
  exports: [
    BaseComponent, 
    TableComponent,
    InputReadonlyComponent,
    InputSelectComponent,
    InputTextComponent,
    ContainerListComponent,
    RodadoListComponent,
    DocumentComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    FontAwesomeModule,
    NgbModule,
    FormsModule, 
    RouterModule,    
  ],
  providers: [MatDialog],
})
export class PorticCommonModule { }

export { BaseComponent, TableComponent, Row, RowArrayUtils };
export { InputReadonlyComponent, InputSelectComponent, InputTextComponent};
export { ContainerListComponent, RodadoListComponent};