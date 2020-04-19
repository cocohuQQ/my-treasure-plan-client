import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyAssertRegComponent } from './money-assert-reg.component';

describe('MoneyAssertRegComponent', () => {
  let component: MoneyAssertRegComponent;
  let fixture: ComponentFixture<MoneyAssertRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyAssertRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyAssertRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
