import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDropdownComponent } from './combo-dropdown.component';

describe('ComboDropdownComponent', () => {
  let component: ComboDropdownComponent;
  let fixture: ComponentFixture<ComboDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
