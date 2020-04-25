import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() id: string ="Undefined"
  @Input() name: string="Undefined"
  @Input() value: string="Undefined"
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
