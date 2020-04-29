import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  active:number = 1;
  closeResult: string = '';
  @ViewChild('content') content: NgbModal;

  constructor(private activatedroute: ActivatedRoute,
              private modalService: NgbModal) { 

  }

  ngOnInit(): void {
    // Check whether new/edit carga
    this.activatedroute.params.subscribe(data => {

      if ( Object.keys(data).length > 0 ){
        // Edit Carga
      }else{
        // New Carga
        // SetTimeout is necessary
        // See: https://github.com/ng-bootstrap/ng-bootstrap/issues/1775
        setTimeout(() => { 
          this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
         }, 100);
      }

    })
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
