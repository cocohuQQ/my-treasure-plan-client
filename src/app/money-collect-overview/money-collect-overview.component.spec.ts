import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCollectOverviewComponent } from './money-collect-overview.component';

describe('MoneyCollectOverviewComponent', () => {
  let component: MoneyCollectOverviewComponent;
  let fixture: ComponentFixture<MoneyCollectOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCollectOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCollectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
