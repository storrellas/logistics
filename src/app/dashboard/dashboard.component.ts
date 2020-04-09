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

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
    console.log("Taking my time")
  }

}
