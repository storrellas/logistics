import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCargaComponent } from './lista-carga.component';

describe('ListaCargaComponent', () => {
  let component: ListaCargaComponent;
  let fixture: ComponentFixture<ListaCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
