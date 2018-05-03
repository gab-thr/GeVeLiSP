import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkParametersPageComponent } from './network-parameters-page.component';

describe('NetworkParametersPageComponent', () => {
  let component: NetworkParametersPageComponent;
  let fixture: ComponentFixture<NetworkParametersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkParametersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkParametersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
