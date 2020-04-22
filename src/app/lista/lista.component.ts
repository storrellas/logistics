import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  table_header: string[] = ["Barco", "Llegada", "Salida", "Tipo Doc", "Tipo Carga", "Emisor",
                              "Receptor", "Estado", "Fecha", "No Documento", "Versión", "Usuario", "Estado Resguardo"]
  table_data: object[];
  table_rows: number[];

  filter_type_list: string[] = ["Emisor", "Receptor", "No Lista/Doc", "Desde", "Buque", "No Viaje",
                              "Escala", "Tipo Documento", "Tipo Carga", "Contendor Matrícula", 
                              "Rodado Bastidor", "Rodado Matrícula", "Rodado Usados", 
                              "Rodado Marca", "Rodado Clase", "Rodado Tipo"];

  constructor() { 

    // Fill table data
    this.table_data = Array(10).fill({})
    this.table_data[0] = {ship: 'myship', arrival: '12/03/20 08:38', departure: '12/03/20 08:38', doc_type: 'doc', 
                          cargo_type: 'cargo', emiter: 'myemiter', receiver: 'myreceiver', status: 'mystatus', date: '12/03/20', 
                          id: '12345', version: 'myversion', user: 'myuser', receipt_status: 'open'}
    this.table_data[1] = {ship: 'myship', arrival: '12/03/20 08:38', departure: '12/03/20 08:38', doc_type: 'doc', 
                          cargo_type: 'cargo', emiter: 'myemiter', receiver: 'myreceiver', status: 'mystatus', date: '12/03/20', 
                          id: '12345', version: 'myversion', user: 'myuser', receipt_status: 'open'}

  }


  ngOnInit(): void {
  }

  onClickMe() {
    console.log("Taking my time")
  }


}
