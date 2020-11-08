import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmeTvComponent } from './realme-tv.component';

describe('RealmeTvComponent', () => {
  let component: RealmeTvComponent;
  let fixture: ComponentFixture<RealmeTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmeTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmeTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
