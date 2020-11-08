import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinterafceComponent } from './userinterafce.component';

describe('UserinterafceComponent', () => {
  let component: UserinterafceComponent;
  let fixture: ComponentFixture<UserinterafceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinterafceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinterafceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
