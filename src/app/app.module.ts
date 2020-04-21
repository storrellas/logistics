import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// Declarations
import { AppComponent } from './app.component';

// Imports - Other
import { AppRoutingModule } from './app-routing.module';

// Imports - Project
import { DashboardModule } from './dashboard/dashboard.module';

// Providers


@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    
    // Project imports
    DashboardModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
