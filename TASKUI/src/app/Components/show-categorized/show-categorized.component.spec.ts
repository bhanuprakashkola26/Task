import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategorizedComponent } from './show-categorized.component';

describe('ShowCategorizedComponent', () => {
  let component: ShowCategorizedComponent;
  let fixture: ComponentFixture<ShowCategorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCategorizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCategorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
