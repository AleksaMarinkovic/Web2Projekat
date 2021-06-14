import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfStateChangesWorkPlanComponent } from './history-of-state-changes-work-plan.component';

describe('HistoryOfStateChangesWorkPlanComponent', () => {
  let component: HistoryOfStateChangesWorkPlanComponent;
  let fixture: ComponentFixture<HistoryOfStateChangesWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfStateChangesWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfStateChangesWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
