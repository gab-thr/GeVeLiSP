import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerFormComponent } from './create-manager-form.component';

describe('CreateManagerFormComponent', () => {
  let component: CreateManagerFormComponent;
  let fixture: ComponentFixture<CreateManagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
