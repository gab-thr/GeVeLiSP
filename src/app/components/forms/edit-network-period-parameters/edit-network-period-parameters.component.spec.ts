import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNetworkPeriodParametersComponent } from './edit-network-period-parameters.component';

describe('EditNetworkPeriodParametersComponent', () => {
  let component: EditNetworkPeriodParametersComponent;
  let fixture: ComponentFixture<EditNetworkPeriodParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNetworkPeriodParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNetworkPeriodParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
