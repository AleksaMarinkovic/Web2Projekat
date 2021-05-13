import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableWorkPlanComponent } from './data-table-work-plan.component';

describe('DataTableWorkPlanComponent', () => {
  let component: DataTableWorkPlanComponent;
  let fixture: ComponentFixture<DataTableWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
