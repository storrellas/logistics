import { Component, OnInit } from '@angular/core';


import { faExclamation, faWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faExclamation = faExclamation;
  faWrench = faWrench;
  faGraduationCap = faGraduationCap;

  user: string;
  company: string;
  session_init: string;
  table_header: string[];

  constructor() { 
    this.user = "MyUser";
    this.company = "MyCompany";
    this.session_init = "12/03/20 08:38";
    this.table_header = ["Barco", "Llegada", "Salida", "Tipo Doc", "Tipo Carga", "Emisor",
                          "Receptor", "Estado", "Fecha", "No Documento", "Versión", "Usuario", "Estado Resguardo"]
  }

  ngOnInit(): void {
  }

  onClickMe() {
    console.log("Taking my time")
  }

}
