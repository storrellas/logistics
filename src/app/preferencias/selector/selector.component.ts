import { Component, OnInit } from '@angular/core';

export interface Item {
  code: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  table_header: string[] = ["Código", "Nombre"]
  table_candidate_data: Item[];
  table_selected_data: Item[];

  max_rows_table: number = 10;

  constructor() { }

  ngOnInit(): void {
    this.table_candidate_data = this.generata_random_table_data()
    this.table_selected_data = this.generata_random_table_data()
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
      table_data[i] = {code: this.generate_random_str(4), 
                        name: 'myname', selected: false}  
    }
    return table_data;
  }

  onSearch(event: MouseEvent){
    this.table_candidate_data = this.generata_random_table_data()
  }

  onClickCandidateItem(event: MouseEvent, code: string){
    const index = this.table_candidate_data.findIndex( (element) => element.code == code)
    this.table_candidate_data[index].selected = !this.table_candidate_data[index].selected; 
  }

  onClickSelectSelectedItem(event: MouseEvent, code: string){
    const index = this.table_selected_data.findIndex( (element) => element.code == code)
    this.table_selected_data[index].selected = !this.table_candidate_data[index].selected; 
  }
}
