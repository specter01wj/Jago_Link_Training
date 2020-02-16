import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orders1Component } from './orders1.component';

describe('Orders1Component', () => {
  let component: Orders1Component;
  let fixture: ComponentFixture<Orders1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orders1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orders1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
