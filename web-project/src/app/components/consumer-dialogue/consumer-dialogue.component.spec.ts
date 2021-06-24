import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerDialogueComponent } from './consumer-dialogue.component';

describe('ConsumerDialogueComponent', () => {
  let component: ConsumerDialogueComponent;
  let fixture: ComponentFixture<ConsumerDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
