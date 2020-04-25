import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  table_header_contenedor = ['Tipo','Matricula', 'Puerto descarga', 'Lleno/Vacío', 'MMPP', 'Peso Verif.', 'Despacho', 'Confirmado']
  table_header_rodado = ['Clase','Tipo', 'Cantidad', 'Bastidor', 'Matrícula', 'Usado', 'Marca', 'Modelo', 'Puerto descarga', 'Grupo']

  active=1;
  constructor() { }

  ngOnInit(): void {
  }

}
