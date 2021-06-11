import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentIncidentsComponent } from './equipment-incidents.component';

describe('EquipmentIncidentsComponent', () => {
  let component: EquipmentIncidentsComponent;
  let fixture: ComponentFixture<EquipmentIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
