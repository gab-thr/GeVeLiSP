import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeloSpotterHomePageComponent } from './velo-spotter-home-page.component';

describe('VeloSpotterHomePageComponent', () => {
  let component: VeloSpotterHomePageComponent;
  let fixture: ComponentFixture<VeloSpotterHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeloSpotterHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeloSpotterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
