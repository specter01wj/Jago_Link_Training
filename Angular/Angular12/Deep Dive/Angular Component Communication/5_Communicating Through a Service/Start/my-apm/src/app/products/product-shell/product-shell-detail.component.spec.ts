import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShellDetailComponent } from './product-shell-detail.component';

describe('ProductShellDetailComponent', () => {
  let component: ProductShellDetailComponent;
  let fixture: ComponentFixture<ProductShellDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShellDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShellDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
