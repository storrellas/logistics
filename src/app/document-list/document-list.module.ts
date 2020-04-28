import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list.component';

// imports
import { PorticCommonModule } from '../portic-common/portic-common.module';



@NgModule({
  declarations: [DocumentListComponent],
  imports: [
    CommonModule,
    PorticCommonModule
  ]
})
export class DocumentListModule { }

export { DocumentListComponent };
