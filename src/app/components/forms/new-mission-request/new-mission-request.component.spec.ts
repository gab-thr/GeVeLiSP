import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMissionRequestComponent } from './new-mission-request.component';

describe('NewMissionRequestComponent', () => {
  let component: NewMissionRequestComponent;
  let fixture: ComponentFixture<NewMissionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMissionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMissionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
