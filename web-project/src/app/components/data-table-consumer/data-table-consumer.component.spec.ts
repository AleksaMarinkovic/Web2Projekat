import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableConsumerComponent } from './data-table-consumer.component';

describe('DataTableConsumerComponent', () => {
  let component: DataTableConsumerComponent;
  let fixture: ComponentFixture<DataTableConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
