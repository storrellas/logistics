import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { TableComponent, RowArrayUtils, Row } from '../../portic-common/portic-common.module';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  // Determines the min number of rows in 
  min_rows_table: number = 10;

  @Input() table_header: string[] = ["Código", "Nombre"]
  @ViewChild('tbl_candidate') table_candidate_component: TableComponent;
  @ViewChild('tbl_selected') table_selected_component: TableComponent;

  constructor() { }

  ngOnInit(): void { }

  onSearch(event: MouseEvent){
    this.table_candidate_component.refresh_random_table_data();
  }

  // Candidate <-> Selected
  onSource2Destination(source: Row[], destination: Row[]){

    // Remove undefined
    let filter_source = RowArrayUtils.removeEmptiness(source)
    let filter_destination = RowArrayUtils.removeEmptiness(destination)

    // Get selected
    let items_to_move = filter_source.filter( (element) => element.selected == true)

    // Add to destination
    source = filter_source.filter( (element) => !items_to_move.includes(element) )
    destination = filter_destination.concat(items_to_move)

    // Mark all as unselected
    source = RowArrayUtils.removeSelection(source)
    destination = RowArrayUtils.removeSelection(destination)

    return [source, destination]
  }

  onCandidate2Selected(event: MouseEvent){
    [this.table_candidate_component.table_data, 
      this.table_selected_component.table_data] = 
      this.onSource2Destination( this.table_candidate_component.table_data, 
                                  this.table_selected_component.table_data)
    this.table_candidate_component.fillEmptiness()
    this.table_selected_component.fillEmptiness()
  }

  onSelected2Candidate(event: MouseEvent){
    [this.table_selected_component.table_data, 
      this.table_candidate_component.table_data] = 
      this.onSource2Destination( this.table_selected_component.table_data, 
                                  this.table_candidate_component.table_data)
    this.table_candidate_component.fillEmptiness()
    this.table_selected_component.fillEmptiness()
  }

  onAllSource2Destination(source: Row[], destination: Row[]){
    // Add items
    let filter_source = RowArrayUtils.removeEmptiness(source)
    let filter_destination = RowArrayUtils.removeEmptiness(destination)

    destination = filter_destination.concat(filter_source)

    // Mark all as unselected
    destination = RowArrayUtils.removeSelection(destination)

    // Remove items on source
    source = []

    return [source, destination]
  }

  onAllCandidate2Selected(event: MouseEvent){
    [this.table_candidate_component.table_data, 
      this.table_selected_component.table_data] = 
      this.onAllSource2Destination( this.table_candidate_component.table_data, 
                                    this.table_selected_component.table_data)
    // Fill Emptiness                                    
    this.table_candidate_component.fillEmptiness()
    this.table_selected_component.fillEmptiness()                                    
  }
  
  onAllSelected2Candidate(event: MouseEvent){
    [this.table_selected_component.table_data, this.table_candidate_component.table_data] = 
      this.onAllSource2Destination( this.table_selected_component.table_data, 
                                    this.table_candidate_component.table_data)
    // Fill Emptiness                                    
    this.table_candidate_component.fillEmptiness()
    this.table_selected_component.fillEmptiness()                                    
  }

}
