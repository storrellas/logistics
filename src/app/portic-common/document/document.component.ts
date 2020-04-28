import { Component, OnInit, Input } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  port_id: string = "port_load";
  port_name: string = "Puerto de Carga";
  closeResult: string = '';


  @Input()
  set type(value: string) {
    if(value == "carga"){
      this.port_id = "port_load";
      this.port_name = "Puerto de Carga";
    }else if( value == "descarga" ){
      this.port_id = "port_unload";
      this.port_name = "Puerto de Descarga";
    }else{
      this.port_id = "unknown";
      this.port_name = "unknown";
    }
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

