import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInformationWrComponent } from './basic-information-wr.component';

describe('BasicInformationWrComponent', () => {
  let component: BasicInformationWrComponent;
  let fixture: ComponentFixture<BasicInformationWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInformationWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInformationWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
