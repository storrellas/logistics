import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  port_id: string = "port_load";
  port_name: string = "Puerto de Carga";

  @Input()
  set type(value: string) {
    if(value == "carga"){
      this.port_id = "port_load";
      this.port_name = "Puerto de Carga";
    }else if( value == "descarga" ){
      this.port_id = "port_unload";
      this.port_name = "Puerto de Descarga";
    }else{
      this.port_id = "unknown";
      this.port_name = "unknown";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
