import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionRequestPageComponent } from './mission-request-page.component';

describe('MissionRequestPageComponent', () => {
  let component: MissionRequestPageComponent;
  let fixture: ComponentFixture<MissionRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
