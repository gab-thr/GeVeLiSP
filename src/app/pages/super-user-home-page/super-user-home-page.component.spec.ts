import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserHomePageComponent } from './super-user-home-page.component';

describe('SuperUserHomePageComponent', () => {
  let component: SuperUserHomePageComponent;
  let fixture: ComponentFixture<SuperUserHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperUserHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUserHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
