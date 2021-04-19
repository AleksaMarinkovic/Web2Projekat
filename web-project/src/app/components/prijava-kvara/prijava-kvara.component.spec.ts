import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaKvaraComponent } from './prijava-kvara.component';

describe('PrijavaKvaraComponent', () => {
  let component: PrijavaKvaraComponent;
  let fixture: ComponentFixture<PrijavaKvaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaKvaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaKvaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
