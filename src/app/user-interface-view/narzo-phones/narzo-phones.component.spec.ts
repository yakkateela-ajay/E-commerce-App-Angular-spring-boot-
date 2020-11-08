import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarzoPhonesComponent } from './narzo-phones.component';

describe('NarzoPhonesComponent', () => {
  let component: NarzoPhonesComponent;
  let fixture: ComponentFixture<NarzoPhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarzoPhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarzoPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
