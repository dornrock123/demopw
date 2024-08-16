import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoyComponent } from './teoy.component';

describe('TeoyComponent', () => {
  let component: TeoyComponent;
  let fixture: ComponentFixture<TeoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeoyComponent]
    });
    fixture = TestBed.createComponent(TeoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
