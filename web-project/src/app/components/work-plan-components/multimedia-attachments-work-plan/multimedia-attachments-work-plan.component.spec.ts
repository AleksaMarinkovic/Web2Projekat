import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaAttachmentsWorkPlanComponent } from './multimedia-attachments-work-plan.component';

describe('MultimediaAttachmentsWorkPlanComponent', () => {
  let component: MultimediaAttachmentsWorkPlanComponent;
  let fixture: ComponentFixture<MultimediaAttachmentsWorkPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaAttachmentsWorkPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaAttachmentsWorkPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
