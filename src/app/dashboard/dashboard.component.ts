import { Component, OnInit, Inject } from '@angular/core';



import { faExclamation, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

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
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: "this.name", animal: "this.animal"}
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
