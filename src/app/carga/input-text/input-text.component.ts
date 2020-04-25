import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() id: string ="Undefined"
  @Input() name: string="Undefined"
  @Input() value: string="Undefined"

  constructor() { }

  ngOnInit(): void {
  }

}
