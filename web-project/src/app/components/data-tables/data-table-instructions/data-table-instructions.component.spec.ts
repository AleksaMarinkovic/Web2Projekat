import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableInstructionsComponent } from './data-table-instructions.component';

describe('DataTableInstructionsComponent', () => {
  let component: DataTableInstructionsComponent;
  let fixture: ComponentFixture<DataTableInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
