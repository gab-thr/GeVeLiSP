import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissionFormComponent } from './create-mission-form.component';

describe('CreateMissionFormComponent', () => {
  let component: CreateMissionFormComponent;
  let fixture: ComponentFixture<CreateMissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
