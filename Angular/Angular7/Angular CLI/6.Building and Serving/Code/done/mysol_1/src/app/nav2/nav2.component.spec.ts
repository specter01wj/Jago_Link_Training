
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Nav2Component } from './nav2.component';

describe('Nav2Component', () => {
  let component: Nav2Component;
  let fixture: ComponentFixture<Nav2Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [Nav2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
