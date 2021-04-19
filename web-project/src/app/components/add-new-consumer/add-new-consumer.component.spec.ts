import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewConsumerComponent } from './add-new-consumer.component';

describe('AddNewConsumerComponent', () => {
  let component: AddNewConsumerComponent;
  let fixture: ComponentFixture<AddNewConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
