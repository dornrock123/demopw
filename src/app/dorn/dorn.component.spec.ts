import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DornComponent } from './dorn.component';

describe('DornComponent', () => {
  let component: DornComponent;
  let fixture: ComponentFixture<DornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DornComponent]
    });
    fixture = TestBed.createComponent(DornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
