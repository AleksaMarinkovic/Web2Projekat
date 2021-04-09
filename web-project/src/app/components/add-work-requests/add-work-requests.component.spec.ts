import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkRequestsComponent } from './add-work-requests.component';

describe('AddWorkRequestsComponent', () => {
  let component: AddWorkRequestsComponent;
  let fixture: ComponentFixture<AddWorkRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
