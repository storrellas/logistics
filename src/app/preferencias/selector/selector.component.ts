import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  table_header: string[] = ["Código", "Nombre"]
  table_data: object[];

  constructor() { }

  ngOnInit(): void {
    this.table_data = Array(10).fill({})
    this.table_data[0] = {code: 'mycode', name: 'myname'}
    this.table_data[1] = {code: 'mycode', name: 'myname'}
  }

}
