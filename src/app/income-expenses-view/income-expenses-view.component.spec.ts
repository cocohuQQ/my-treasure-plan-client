import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpensesViewComponent } from './income-expenses-view.component';

describe('IncomeExpensesViewComponent', () => {
  let component: IncomeExpensesViewComponent;
  let fixture: ComponentFixture<IncomeExpensesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeExpensesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpensesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
