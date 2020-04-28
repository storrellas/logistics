import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rodado-list',
  templateUrl: './rodado-list.component.html',
  styleUrls: ['./rodado-list.component.scss']
})
export class RodadoListComponent implements OnInit {

  table_header = ['Clase','Tipo', 'Cantidad', 'Bastidor', 'Matrícula', 'Usado', 'Marca', 'Modelo', 'Puerto descarga', 'Grupo']


  constructor() { }

  ngOnInit(): void {
  }

}
