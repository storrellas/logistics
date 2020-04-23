import { Component, OnInit, ViewChild } from '@angular/core';

import { TableComponent, ItemArrayUtils, Item } from '../table/table.component';

@Component({
  selector: 'app-consignatarios',
  templateUrl: './consignatarios.component.html',
  styleUrls: ['./consignatarios.component.scss']
})
export class ConsignatariosComponent implements OnInit {

  table_header: string[] = ["Código", "Nombre"]
  table_candidate_data: Item[];
  table_selected_data: Item[];

  min_rows_table: number = 10;

  @ViewChild('tbl_candidate') table_candidate_component: TableComponent;
  @ViewChild('tbl_selected') table_selected_component: TableComponent;

  constructor() { }

  ngOnInit(): void { }

  onSearch(event: MouseEvent){
    this.table_candidate_component.refresh_random_table_data();
  }

  // Candidate <-> Selected
  onSource2Destination(source: Item[], destination: Item[]){

    // Remove undefined
    let filter_source = ItemArrayUtils.removeEmptiness(source)
    let filter_destination = ItemArrayUtils.removeEmptiness(destination)

    // Get selected
    let items_to_move = filter_source.filter( (element) => element.selected == true)

    // Add to destination
    source = filter_source.filter( (element) => !items_to_move.includes(element) )
    destination = filter_destination.concat(items_to_move)

    // Fill emptiness
    source = ItemArrayUtils.fillEmptiness(this.min_rows_table, source)
    destination = ItemArrayUtils.fillEmptiness(this.min_rows_table, destination)

    // Mark all as unselected
    source = ItemArrayUtils.removeSelection(source)
    destination = ItemArrayUtils.removeSelection(destination)

    return [source, destination]
  }

  onCandidate2Selected(event: MouseEvent){
    [this.table_candidate_component.table_data, 
      this.table_selected_component.table_data] = 
      this.onSource2Destination( this.table_candidate_component.table_data, 
                                  this.table_selected_component.table_data)
  }

  onSelected2Candidate(event: MouseEvent){
    [this.table_selected_component.table_data, 
      this.table_candidate_component.table_data] = 
      this.onSource2Destination( this.table_selected_component.table_data, 
                                  this.table_candidate_component.table_data)
  }

  onAllSource2Destination(source: Item[], destination: Item[]){
    // Add items
    let filter_source = ItemArrayUtils.removeEmptiness(source)
    let filter_destination = ItemArrayUtils.removeEmptiness(destination)

    destination = filter_destination.concat(filter_source)

    // Fill emptiness
    destination = ItemArrayUtils.fillEmptiness(this.min_rows_table, destination)

    // Mark all as unselected
    destination = ItemArrayUtils.removeSelection(destination)

    // Remove items on source
    source = Array(this.min_rows_table).fill(new Item());

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
