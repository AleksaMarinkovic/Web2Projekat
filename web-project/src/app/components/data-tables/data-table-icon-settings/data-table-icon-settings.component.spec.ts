import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableIconSettingsComponent } from './data-table-icon-settings.component';

describe('DataTableIconSettingsComponent', () => {
  let component: DataTableIconSettingsComponent;
  let fixture: ComponentFixture<DataTableIconSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableIconSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableIconSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
