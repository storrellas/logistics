import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() id: string = "Undefined";
  @Input() name: string = "Undefined";
  @Input() option_list: string[] = ['Undefined'];
  isSearch: boolean = false;
  @Input()
  set search(value: string) {
    this.isSearch = value != 'false';
  }

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
