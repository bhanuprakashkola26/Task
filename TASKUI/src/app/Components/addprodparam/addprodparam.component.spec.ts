import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodparamComponent } from './addprodparam.component';

describe('AddprodparamComponent', () => {
  let component: AddprodparamComponent;
  let fixture: ComponentFixture<AddprodparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodparamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprodparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
