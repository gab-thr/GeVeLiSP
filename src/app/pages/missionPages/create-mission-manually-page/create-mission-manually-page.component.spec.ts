import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissionManuallyPageComponent } from './create-mission-manually-page.component';

describe('CreateMissionManuallyPageComponent', () => {
  let component: CreateMissionManuallyPageComponent;
  let fixture: ComponentFixture<CreateMissionManuallyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMissionManuallyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMissionManuallyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
