import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingInstructionsWorkPlanComponent } from './switching-instructions-work-plan.component';

describe('SwitchingInstructionsWorkPlanComponent', () => {
  let component: SwitchingInstructionsWorkPlanComponent;
  let fixture: ComponentFixture<SwitchingInstructionsWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingInstructionsWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingInstructionsWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
