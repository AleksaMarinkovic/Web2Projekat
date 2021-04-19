import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentWorkPlanComponent } from './equipment-work-plan.component';

describe('EquipmentComponent', () => {
  let component: EquipmentWorkPlanComponent;
  let fixture: ComponentFixture<EquipmentWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
