import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkPlanComponent } from './add-work-plan.component';

describe('AddWorkPlanComponent', () => {
  let component: AddWorkPlanComponent;
  let fixture: ComponentFixture<AddWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
