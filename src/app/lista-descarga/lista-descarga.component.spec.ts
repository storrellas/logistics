import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDescargaComponent } from './lista-descarga.component';

describe('ListaDescargaComponent', () => {
  let component: ListaDescargaComponent;
  let fixture: ComponentFixture<ListaDescargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDescargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
