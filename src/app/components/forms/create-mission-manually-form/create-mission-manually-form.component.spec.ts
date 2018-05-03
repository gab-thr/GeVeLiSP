import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissionManuallyFormComponent } from './create-mission-manually-form.component';

describe('CreateMissionManuallyFormComponent', () => {
  let component: CreateMissionManuallyFormComponent;
  let fixture: ComponentFixture<CreateMissionManuallyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMissionManuallyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMissionManuallyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
