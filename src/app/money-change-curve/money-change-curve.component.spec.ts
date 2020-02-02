import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyChangeCurveComponent } from './money-change-curve.component';

describe('MoneyChangeCurveComponent', () => {
  let component: MoneyChangeCurveComponent;
  let fixture: ComponentFixture<MoneyChangeCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyChangeCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyChangeCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
