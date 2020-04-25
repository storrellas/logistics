import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() id: string = "Undefined";
  @Input() name: string = "Undefined";
  @Input() option_list: string[] = ['Undefined'];

  constructor() { }

  ngOnInit(): void {
  }

}
