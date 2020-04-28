import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodadoListComponent } from './rodado-list.component';

describe('RodadoListComponent', () => {
  let component: RodadoListComponent;
  let fixture: ComponentFixture<RodadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
