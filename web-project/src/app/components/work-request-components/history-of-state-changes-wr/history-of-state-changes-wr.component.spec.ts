import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfStateChangesWrComponent } from './history-of-state-changes-wr.component';

describe('HistoryOfStateChangesWrComponent', () => {
  let component: HistoryOfStateChangesWrComponent;
  let fixture: ComponentFixture<HistoryOfStateChangesWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfStateChangesWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfStateChangesWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
