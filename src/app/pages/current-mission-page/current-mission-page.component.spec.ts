import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMissionPageComponent } from './current-mission-page.component';

describe('CurrentMissionPageComponent', () => {
  let component: CurrentMissionPageComponent;
  let fixture: ComponentFixture<CurrentMissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
