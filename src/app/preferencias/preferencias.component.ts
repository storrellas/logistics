import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectorComponent } from './selector/selector.component';
import { Router,NavigationEnd  } from '@angular/router';


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
  constructor(private router:Router) {
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        if(e.url == 'preferencias'){
          // NOTE: Please update here with REST call by inspecting viewchilds'
          console.log("Leaving preferencias. ")
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
 