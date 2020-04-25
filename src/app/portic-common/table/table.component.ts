import { Component, OnInit, Input } from '@angular/core';

export class RowArrayUtils {

  static fillEmptiness(min_rows_table: number, table_header: string[], table_data: Row[]){
    let table_data_empty = []
    if( min_rows_table - table_data.length > 0){
      const data = Array(table_header.length).fill( "" )
      table_data_empty = Array(min_rows_table - table_data.length).fill( new Row(data, false) )
    }
    return table_data_empty
  }

  static removeEmptiness(table_data: Row[]){
    return table_data.filter( (element) => element.data != undefined)
  }

  static removeSelection(table_data: Row[]){
    table_data.map( (element) => { if(element.data != undefined) element.selected = false })
    return table_data
  }

}

export class Row {
  constructor(public data: any[] = undefined, 
              public selected: boolean = undefined){}
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table_header: string[] = ["col1", "col2"]
  @Input() min_rows_table: number = 10;  
  table_data: Row[] = [];
  table_data_empty: Row[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    this.refresh_random_table_data()
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

  generate_random_table_data(){
    const random_rows : number = Math.floor(Math.random() * Math.floor(this.min_rows_table));
    let table_data: Row[] = []
    for( let i = 0 ; i < random_rows; i++ ){
      const data: string[] = [];
      for( let j = 0; j < this.table_header.length; j++ ){
        data.push(this.generate_random_str(4))
      }
      table_data.push( new Row(data, false) )
    }

    // Complete table with empty rows
    const table_data_empty = RowArrayUtils.fillEmptiness(this.min_rows_table, this.table_header, table_data)
    return [table_data, table_data_empty];
  }

  fillEmptiness(){
    this.table_data_empty = []
    if( this.min_rows_table - this.table_data.length > 0){
      const data = Array(this.table_header.length).fill( "" )
      this.table_data_empty = Array(this.min_rows_table - this.table_data.length).fill( new Row(data, false) )
    }
  }

  refresh_random_table_data(){
    [this.table_data, this.table_data_empty] = 
      this.generate_random_table_data()
  }
  
  // Selectable items
  onClickItem(event: MouseEvent, id: string){
    if( id == undefined ) return;
    const index = this.table_data.findIndex( (element) => element.data[0] == id)
    this.table_data[index].selected = !this.table_data[index].selected; 
  }


}
