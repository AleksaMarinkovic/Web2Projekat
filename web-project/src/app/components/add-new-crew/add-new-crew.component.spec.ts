import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCrewComponent } from './add-new-crew.component';

describe('AddNewCrewComponent', () => {
  let component: AddNewCrewComponent;
  let fixture: ComponentFixture<AddNewCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
