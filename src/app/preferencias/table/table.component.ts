import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

export class Item {
  constructor(public code: string = undefined, 
              public name: string = undefined, 
              public selected: boolean = undefined){}
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table_header: string[] = ["col1", "col2"]
  table_data: Item[] = [];

  max_rows_table: number = 10;

  constructor() { 
    this.table_data = this.generate_random_table_data()
  }

  ngOnInit(): void {
  }


  generate_random_str(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  fillEmptiness(table_data: Item[]){
    let empty_row = []
    if( this.max_rows_table - table_data.length > 0)
      empty_row = Array(this.max_rows_table - table_data.length).fill( new Item() )
    return table_data.concat( empty_row )
  }

  removeEmptiness(table_data: Item[]){
    return table_data.filter( (element) => element.code != undefined)
  }

  removeSelection(table_data: Item[]){
    return table_data.map( (element) => { if(element.code != undefined) element.selected = false })
  }

  generate_random_table_data(){
    //const random_rows : number = Math.floor(Math.random() * Math.floor(this.max_rows_table));
    const random_rows : number = 2;
    let table_data = []
    for(let i = 0 ; i < random_rows; i++){
      table_data.push( new Item(this.generate_random_str(4), 'myname', false) )
    }
    const empty_row = Array(this.max_rows_table - table_data.length).fill( new Item() )
    table_data = table_data.concat( empty_row )
    return table_data;
  }

  refresh_random_table_data(){
    this.table_data = this.generate_random_table_data()
  }
  
  // Selectable items
  onClickItem(event: MouseEvent, code: string){
    if( code == undefined ) return;
    const index = this.table_data.findIndex( (element) => element.code == code)
    this.table_data[index].selected = !this.table_data[index].selected; 
  }


}
