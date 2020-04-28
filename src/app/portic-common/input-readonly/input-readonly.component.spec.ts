import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReadonlyComponent } from './input-readonly.component';

describe('InputReadonlyComponent', () => {
  let component: InputReadonlyComponent;
  let fixture: ComponentFixture<InputReadonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputReadonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
