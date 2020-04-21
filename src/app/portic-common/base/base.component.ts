import { Component, OnInit } from '@angular/core';
import { faExclamation, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'portic-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  faExclamation = faExclamation;
  faWrench = faWrench;
  faGraduationCap = faGraduationCap;

  user: string; 
  company: string;
  session_init: string;

  constructor(public dialog: MatDialog) { 
    this.user = "MyUser";
    this.company = "MyCompany";
    this.session_init = "12/03/20 08:38";
  }

  ngOnInit(): void {
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

  onClickMe() {
    console.log("Taking my time")
  }  

}


