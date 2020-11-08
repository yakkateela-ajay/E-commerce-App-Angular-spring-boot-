import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByPriceComponent } from './view-product-by-price.component';

describe('ViewProductByPriceComponent', () => {
  let component: ViewProductByPriceComponent;
  let fixture: ComponentFixture<ViewProductByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
