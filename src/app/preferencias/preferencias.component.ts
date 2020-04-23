import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss']
})
export class PreferenciasComponent implements OnInit {

  @ViewChild('terminales') terminales: SelectorComponent;
  @ViewChild('consignatarios') consignatarios: SelectorComponent;
  @ViewChild('lineas_maritimas') lineas_maritimas: SelectorComponent;
  @ViewChild('marcas_rodados') marcas_rodados: SelectorComponent;

  active = 1; 
  constructor() { }

  ngOnInit(): void {
  }

  onTerminalesChanged(flag){
    console.log("onTerminalesChanged")
  }
  onConsignatariosChanged(flag){
    console.log("onConsignatariosChanged")
  }
  onLineasMaritimasChanged(flag){
    console.log("onLineasMaritimasChanged")
  }
  onMarcasRodadosChanged(flag){
    console.log("onMarcasRodadosChanged")
  }
}
 