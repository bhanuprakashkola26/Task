import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParameterizedComponent } from './edit-parameterized.component';

describe('EditParameterizedComponent', () => {
  let component: EditParameterizedComponent;
  let fixture: ComponentFixture<EditParameterizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParameterizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditParameterizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
