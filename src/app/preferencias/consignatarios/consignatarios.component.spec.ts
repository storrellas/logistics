import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignatariosComponent } from './consignatarios.component';

describe('ConsignatariosComponent', () => {
  let component: ConsignatariosComponent;
  let fixture: ComponentFixture<ConsignatariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignatariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignatariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
