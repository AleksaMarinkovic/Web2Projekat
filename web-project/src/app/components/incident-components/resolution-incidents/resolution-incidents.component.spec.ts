import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionIncidentsComponent } from './resolution-incidents.component';

describe('ResolutionIncidentsComponent', () => {
  let component: ResolutionIncidentsComponent;
  let fixture: ComponentFixture<ResolutionIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
