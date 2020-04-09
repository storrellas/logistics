import { Component, OnInit, Inject } from '@angular/core';



import { faExclamation, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


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



  constructor(public dialog: MatDialog) { 
    this.user = "MyUser";
    this.company = "MyCompany";
    this.session_init = "12/03/20 08:38";
    this.table_header = ["Barco", "Llegada", "Salida", "Tipo Doc", "Tipo Carga", "Emisor",
                          "Receptor", "Estado", "Fecha", "No Documento", "Versión", "Usuario", "Estado Resguardo"]
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
