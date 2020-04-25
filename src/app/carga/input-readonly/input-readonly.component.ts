import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-readonly',
  templateUrl: './input-readonly.component.html',
  styleUrls: ['./input-readonly.component.scss']
})
export class InputReadonlyComponent implements OnInit {

  @Input() id: string ="Undefined"
  @Input() name: string ="Undefined"
  @Input() value: string ="Undefined"


  constructor() { }

  ngOnInit(): void {
  }

}
