import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStartComponent } from './mission-start.component';

describe('MissionStartComponent', () => {
  let component: MissionStartComponent;
  let fixture: ComponentFixture<MissionStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
