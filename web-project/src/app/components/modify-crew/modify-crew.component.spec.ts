import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCrewComponent } from './modify-crew.component';

describe('ModifyCrewComponent', () => {
  let component: ModifyCrewComponent;
  let fixture: ComponentFixture<ModifyCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
