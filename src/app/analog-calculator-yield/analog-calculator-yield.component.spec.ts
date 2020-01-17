import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogCalculatorYieldComponent } from './analog-calculator-yield.component';

describe('AnalogCalculatorYieldComponent', () => {
  let component: AnalogCalculatorYieldComponent;
  let fixture: ComponentFixture<AnalogCalculatorYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalogCalculatorYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogCalculatorYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
