import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  table_header: string[] = ["Código", "Nombre"]
  table_data: object[];
  table_selected_data: object[];

  max_rows_table: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.table_selected_data = this.generata_random_table_data()
    this.table_data = this.generata_random_table_data()
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

  generata_random_table_data(){
    
    // Generate a max items
    const table_data = Array(this.max_rows_table).fill({})
    const random_rows : number = Math.floor(Math.random() * Math.floor(this.max_rows_table));
    for (let i = 0; i < random_rows; i++) {
      table_data[i] = {code: this.generate_random_str(4), name: 'myname'}  
    }
    return table_data;
  }

  onSearch(event: MouseEvent){
    this.table_data = this.generata_random_table_data()
  }

  onSelectItem(event: MouseEvent, code: string){
    console.log("Selecting element", event, code)
  }
}
