import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// Declarations
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Providers
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';




@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    FontAwesomeModule,
    FormsModule
    
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
