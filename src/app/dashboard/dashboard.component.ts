import { Component, OnInit } from '@angular/core';


// class Document {
//   constructor(public ship: string, public arrival: string, public departure: string, 
//               public doc_type: string, public cargo_type: string, public emiter: string, public receiver: string, public status: string,
//               public date: string, public id: string, public version: string, public user: string, public receipt_status: string) {}
  
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  table_header: string[]; 
  table_data: object[];
  table_rows: number[];

  filter_type_list: string[] = ["Emisor", "Receptor", "No Lista/Doc", "Desde", "Buque", "No Viaje",
                              "Escala", "Tipo Documento", "Tipo Carga", "Contendor Matrícula", 
                              "Rodado Bastidor", "Rodado Matrícula", "Rodado Usados", 
                              "Rodado Marca", "Rodado Clase", "Rodado Tipo"];

  constructor() { 
    this.table_header = ["Barco", "Llegada", "Salida", "Tipo Doc", "Tipo Carga", "Emisor",
                          "Receptor", "Estado", "Fecha", "No Documento", "Versión", "Usuario", "Estado Resguardo"]

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
