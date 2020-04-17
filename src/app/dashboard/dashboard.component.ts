import { Component, OnInit, Inject } from '@angular/core';



import { faExclamation, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

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
  faExclamation = faExclamation;
  faWrench = faWrench;
  faGraduationCap = faGraduationCap;

  user: string; 
  company: string;
  session_init: string;
  table_header: string[]; 
  table_data: object[];
  table_rows: number[];

  constructor(public dialog: MatDialog) { 
    this.user = "MyUser";
    this.company = "MyCompany";
    this.session_init = "12/03/20 08:38";
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


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: {name: "Sergi", animal: "Zeebra"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

  onClickMe() {
    console.log("Taking my time")
  }

}
