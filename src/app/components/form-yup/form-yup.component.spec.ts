import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormYupComponent } from './form-yup.component';

describe('FormYupComponent', () => {
  let component: FormYupComponent;
  let fixture: ComponentFixture<FormYupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormYupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormYupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
