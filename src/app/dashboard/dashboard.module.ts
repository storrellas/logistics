import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declarations
import { DashboardComponent } from './dashboard.component';

// Imports
import { PorticCommonModule } from '../portic-common/portic-common.module';

// Imports - Other
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    DashboardComponent,

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
    FormsModule,

    PorticCommonModule
  ],
  exports: [DashboardComponent, ],

  providers: [],

})
export class DashboardModule { }

export { DashboardComponent } from './dashboard.component';