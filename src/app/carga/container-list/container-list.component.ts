import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {

  table_header = ['Tipo','Matricula', 'Puerto descarga', 'Lleno/Vacío', 'MMPP', 'Peso Verif.', 'Despacho', 'Confirmado']


  constructor() { }

  ngOnInit(): void {
  }

}
