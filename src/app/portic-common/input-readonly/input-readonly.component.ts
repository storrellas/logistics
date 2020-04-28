import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'input-readonly',
  templateUrl: './input-readonly.component.html',
  styleUrls: ['./input-readonly.component.scss']
})
export class InputReadonlyComponent implements OnInit {

  @Input() id: string ="Undefined"
  @Input() name: string ="Undefined"
  @Input() value: string ="Undefined"
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
