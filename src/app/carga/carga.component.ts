import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  active=1;
  constructor(private activatedroute: ActivatedRoute) { 
    this.activatedroute.params.subscribe(data => {
      // console.log(JSON.stringify(data));
      // console.log(data.keys())

      if ( Object.keys(data).length > 0 ){
        console.log("Editing Carga List")
      }else{
        console.log("New Carga List")
      }

    })
  }

  ngOnInit(): void {
  }

}
