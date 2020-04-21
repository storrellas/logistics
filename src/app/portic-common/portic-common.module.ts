import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declarations
import { ModalComponent } from './modal/modal.component';
import { BaseComponent } from './base/base.component';

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

// Providers
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BaseComponent,
    ModalComponent,
  ],
  exports: [BaseComponent],
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
    FormsModule,    
  ],
  providers: [MatDialog],
})
export class PorticCommonModule { }

export { BaseComponent };