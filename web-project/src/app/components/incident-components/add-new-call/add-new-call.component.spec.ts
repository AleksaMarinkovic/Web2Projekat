import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCallComponent } from './add-new-call.component';

describe('AddNewCallComponent', () => {
  let component: AddNewCallComponent;
  let fixture: ComponentFixture<AddNewCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
