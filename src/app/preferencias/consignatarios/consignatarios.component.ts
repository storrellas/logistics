import { Component, OnInit, ViewChild } from '@angular/core';

import { TableComponent, Item } from '../table/table.component';

@Component({
  selector: 'app-consignatarios',
  templateUrl: './consignatarios.component.html',
  styleUrls: ['./consignatarios.component.scss']
})
export class ConsignatariosComponent implements OnInit {

  table_header: string[] = ["Código", "Nombre"]
  table_candidate_data: Item[];
  table_selected_data: Item[];

  max_rows_table: number = 10;

  @ViewChild('tbl_candidate') table_candidate_component: TableComponent;
  @ViewChild('tbl_selected') table_selected_component: TableComponent;

  constructor() { }

  ngOnInit(): void { }

  onSearch(event: MouseEvent){
    this.table_candidate_component.refresh_random_table_data();
  }

  // Candidate <-> Selected
  onSource2Destination(source: Item[], destination: Item[]){

    console.log("source", source)
    console.log("destination", destination)

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
    let empty_row_source = []
    let items_to_keep_source = source.filter( (element) => element.selected == false )
    if( this.max_rows_table - items_to_keep_source.length > 0)
      empty_row_source = Array(this.max_rows_table - items_to_keep_source.length).fill( new Item() )    
    source = items_to_keep_source.concat( empty_row_source )

    console.log("source", source)
    console.log("destination", destination)

    return [source, destination]
  }

  onCandidate2Selected(event: MouseEvent){
    console.log("table_candidate_component ", this.table_candidate_component.table_data)
    console.log("table_selected_component ", this.table_selected_component.table_data)

    
    // [this.table_candidate_component.table_data, this.table_selected_component.table_data] = 
    //   this.onSource2Destination( this.table_candidate_component.table_data, 
    //                               this.table_selected_component.table_data)

    let output = this.onSource2Destination( this.table_candidate_component.table_data, 
                                    this.table_selected_component.table_data)

    this.table_candidate_component.table_data = output[0];
    this.table_selected_component.table_data = output[1];
    // console.log("table_candidate_component ", output[0])
    // console.log("table_selected_component ", output[1])
  }

  onSelected2Candidate(event: MouseEvent){
    [this.table_selected_component.table_data, 
      this.table_candidate_component.table_data] = 
      this.onSource2Destination( this.table_selected_component.table_data, 
                                  this.table_candidate_component.table_data)
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
    [this.table_candidate_component.table_data, 
      this.table_selected_component.table_data] = 
      this.onAllSource2Destination( this.table_candidate_component.table_data, 
                                    this.table_selected_component.table_data)
  }
  onAllSelected2Candidate(event: MouseEvent){
    [this.table_selected_component.table_data, this.table_candidate_component.table_data] = 
      this.onAllSource2Destination( this.table_selected_component.table_data, 
                                    this.table_candidate_component.table_data)
  }

}
