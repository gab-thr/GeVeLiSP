import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkParametersEditPeriodPageComponent } from './network-parameters-edit-period-page.component';

describe('NetworkParametersEditPeriodPageComponent', () => {
  let component: NetworkParametersEditPeriodPageComponent;
  let fixture: ComponentFixture<NetworkParametersEditPeriodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkParametersEditPeriodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkParametersEditPeriodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
