import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginginComponent } from './loggingin.component';

describe('LogginginComponent', () => {
  let component: LogginginComponent;
  let fixture: ComponentFixture<LogginginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
