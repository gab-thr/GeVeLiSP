import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMissionManuallyTableComponent } from './create-mission-manually-table.component';

describe('CreateMissionManuallyTableComponent', () => {
  let component: CreateMissionManuallyTableComponent;
  let fixture: ComponentFixture<CreateMissionManuallyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMissionManuallyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMissionManuallyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
