import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationParametersComponent } from './station-parameters.component';

describe('StationParametersComponent', () => {
  let component: StationParametersComponent;
  let fixture: ComponentFixture<StationParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
