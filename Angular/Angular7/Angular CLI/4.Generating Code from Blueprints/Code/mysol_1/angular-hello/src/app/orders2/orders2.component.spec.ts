import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orders2Component } from './orders2.component';

describe('Orders2Component', () => {
  let component: Orders2Component;
  let fixture: ComponentFixture<Orders2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orders2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orders2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
