import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component'

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss']
})
export class PreferenciasComponent implements OnInit {

  @ViewChild(TableComponent) consignatarios_table: TableComponent;
  
  active = 1; 
  constructor() { }

  ngOnInit(): void {
  }

}
 