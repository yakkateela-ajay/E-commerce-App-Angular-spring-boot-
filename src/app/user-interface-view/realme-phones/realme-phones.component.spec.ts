import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmePhonesComponent } from './realme-phones.component';

describe('RealmePhonesComponent', () => {
  let component: RealmePhonesComponent;
  let fixture: ComponentFixture<RealmePhonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmePhonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
