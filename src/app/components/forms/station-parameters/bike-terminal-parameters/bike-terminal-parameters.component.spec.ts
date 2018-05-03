import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTerminalParametersComponent } from './bike-terminal-parameters.component';

describe('BikeTerminalParametersComponent', () => {
  let component: BikeTerminalParametersComponent;
  let fixture: ComponentFixture<BikeTerminalParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeTerminalParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeTerminalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
