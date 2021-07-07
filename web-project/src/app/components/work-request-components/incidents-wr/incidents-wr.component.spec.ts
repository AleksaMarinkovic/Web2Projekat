import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsWrComponent } from './incidents-wr.component';

describe('IncidentsWrComponent', () => {
  let component: IncidentsWrComponent;
  let fixture: ComponentFixture<IncidentsWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentsWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentsWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
