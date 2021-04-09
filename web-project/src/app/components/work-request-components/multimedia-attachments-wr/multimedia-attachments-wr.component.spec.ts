import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaAttachmentsWrComponent } from './multimedia-attachments-wr.component';

describe('MultimediaAttachmentsWrComponent', () => {
  let component: MultimediaAttachmentsWrComponent;
  let fixture: ComponentFixture<MultimediaAttachmentsWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaAttachmentsWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaAttachmentsWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
