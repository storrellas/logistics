import { Component, OnInit } from '@angular/core';

export class Item {
  constructor(public code: string = undefined, 
              public name: string = undefined, 
              public selected: boolean = undefined){}
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
    const random_rows : number = Math.floor(Math.random() * Math.floor(this.max_rows_table));
    let table_data = []
    for(let i = 0 ; i < random_rows; i++){
      table_data.push( new Item(this.generate_random_str(4), 'myname', false) )
    }
    const empty_row = Array(this.max_rows_table - table_data.length).fill( new Item() )
    table_data = table_data.concat( empty_row )
    return table_data;
  }

  onSearch(event: MouseEvent){
    this.table_candidate_data = this.generata_random_table_data()
  }

  // Selectable items
  onClickCandidateItem(event: MouseEvent, code: string){
    if( code == undefined ) return;
    const index = this.table_candidate_data.findIndex( (element) => element.code == code)
    this.table_candidate_data[index].selected = !this.table_candidate_data[index].selected; 
  }
  onClickSelectSelectedItem(event: MouseEvent, code: string){
    if( code == undefined ) return;
    const index = this.table_selected_data.findIndex( (element) => element.code == code)
    this.table_selected_data[index].selected = !this.table_candidate_data[index].selected; 
  }

  // Candidate <-> Selected
  onSource2Destination(source: Item[], destination: Item[]){
    // Add items
    let items_to_keep = destination.filter( (element) => element.code != undefined )
    let items_to_add = source.filter( (element) => element.selected )
    items_to_keep = items_to_keep.concat(items_to_add)
    items_to_keep.map( (element) => element.selected = false)

    let empty_row = []
    if( this.max_rows_table - items_to_keep.length > 0)
      empty_row = Array(this.max_rows_table - items_to_keep.length).fill( new Item() )    
    destination = items_to_keep.concat( empty_row )

    
    // Remove items
    items_to_keep = source.filter( (element) => element.selected == false )
    if( this.max_rows_table - items_to_keep.length > 0)
      empty_row = Array(this.max_rows_table - items_to_keep.length).fill( new Item() )    
    source = items_to_keep.concat( empty_row )
    return [source, destination]
  }

  onCandidate2Selected(event: MouseEvent){
    [this.table_candidate_data, this.table_selected_data] = 
      this.onSource2Destination( this.table_candidate_data, this.table_selected_data)

  }
  onSelected2Candidate(event: MouseEvent){
    [this.table_selected_data, this.table_candidate_data] = 
      this.onSource2Destination( this.table_selected_data, this.table_candidate_data)
  }

  onAllSource2Destination(source: Item[], destination: Item[]){
    // Add items
    let items_to_keep = destination.filter( (element) => element.code != undefined )
    let items_to_add = source.filter( (element) => element.code != undefined )
    items_to_keep = items_to_keep.concat(items_to_add)
    items_to_keep.map( (element) => element.selected = false)
    let empty_row = []
    if( this.max_rows_table - items_to_keep.length > 0)
      empty_row = Array(this.max_rows_table - items_to_keep.length).fill( new Item() )    
    destination = items_to_keep.concat( empty_row )
    
    // Remove items
    source = Array(this.max_rows_table).fill(new Item());
    return [source, destination]
  }

  onAllCandidate2Selected(event: MouseEvent){    
    [this.table_candidate_data, this.table_selected_data] = 
      this.onAllSource2Destination( this.table_candidate_data, this.table_selected_data)
  }
  onAllSelected2Candidate(event: MouseEvent){
    [this.table_selected_data, this.table_candidate_data] = 
      this.onAllSource2Destination( this.table_selected_data, this.table_candidate_data)
  }
}
