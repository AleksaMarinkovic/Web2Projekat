import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyElementComponent } from './modify-element.component';

describe('ModifyElementComponent', () => {
  let component: ModifyElementComponent;
  let fixture: ComponentFixture<ModifyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
