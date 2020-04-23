import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

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

  generate_random_str(length: number) {
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
    //const random_rows = 2;
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
  onClickCandidateItem(_event: MouseEvent, code: string){
    if( code == undefined ) return;
    const index = this.table_candidate_data.findIndex( (element) => element.code == code)
    this.table_candidate_data[index].selected = !this.table_candidate_data[index].selected; 
  }
  onClickSelectedItem(event: MouseEvent, code: string){
    if( code == undefined ) return;
    const index = this.table_selected_data.findIndex( (element) => element.code == code)
    this.table_selected_data[index].selected = !this.table_selected_data[index].selected; 
  }



  // Candidate <-> Selected
  onSource2Destination(source: Item[], destination: Item[]){
    // Remove undefined
    let filter_source = source.filter((element) => element.code != undefined);
    let filter_destination = destination.filter((element) => element.code != undefined);

    // Get selected
    let items_to_move = filter_source.filter( (element) => element.selected == true)

    // Add to destination
    source = filter_source.filter( (element) => !items_to_move.includes(element) )
    destination = filter_destination.concat(items_to_move)

    // Fill emptiness
    let empty_row_list = []
    if( this.max_rows_table - source.length > 0)
      empty_row_list = Array(this.max_rows_table - source.length).fill( new Item() )    
    source = source.concat(empty_row_list)

    empty_row_list = []
    if( this.max_rows_table - destination.length > 0)
      empty_row_list = Array(this.max_rows_table - destination.length).fill( new Item() )    
    destination = destination.concat(empty_row_list)

    // Mark all as unselected
    source.map( (element) => { if(element.code != undefined) element.selected = false })
    destination.map( (element) => { if(element.code != undefined) element.selected = false })

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
