import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterizedComponent } from './parameterized.component';

describe('ParameterizedComponent', () => {
  let component: ParameterizedComponent;
  let fixture: ComponentFixture<ParameterizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
