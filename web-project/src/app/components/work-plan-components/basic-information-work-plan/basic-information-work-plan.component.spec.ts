import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationWorkPlanComponent } from './basic-information-work-plan.component';

describe('BasicInformationWorkPlanComponent', () => {
  let component: BasicInformationWorkPlanComponent;
  let fixture: ComponentFixture<BasicInformationWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInformationWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
