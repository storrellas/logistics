import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declarations
import { DashboardComponent } from './dashboard.component';

// Imports - Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
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
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [DashboardComponent, ModalComponent],

  providers: [MatDialog],

})
export class DashboardModule { }
